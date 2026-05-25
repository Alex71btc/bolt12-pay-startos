import { sdk } from './sdk'
import { storeJson } from './fileModels/store.json'
import { lnurlEnv, uiPort } from './utils'

export const main = sdk.setupMain(async ({ effects }) => {
  console.info('Starting BOLT12 Pay!')

  // Feed the user-selected primary URL to the app as its native LNURL/BIP353
  // env defaults. Re-runs main when the "Set Primary URL" action changes it.
  const primaryUrl = await storeJson.read((s) => s.primaryUrl).const(effects)

  return sdk.Daemons.of(effects).addDaemon('primary', {
    subcontainer: await sdk.SubContainer.of(
      effects,
      { imageId: 'main' },
      sdk.Mounts.of()
        .mountVolume({
          volumeId: 'main',
          subpath: null,
          mountpoint: '/data',
          readonly: false,
        })
        .mountDependency({
          dependencyId: 'lnd',
          volumeId: 'main',
          subpath: null,
          mountpoint: '/mnt/lnd',
          readonly: true,
        }),
      'bolt12-pay-sub',
    ),
    exec: {
      command: ['/usr/local/bin/docker_entrypoint.sh'],
      env: lnurlEnv(primaryUrl),
    },
    ready: {
      display: 'Web UI',
      fn: () =>
        sdk.healthCheck.checkPortListening(effects, uiPort, {
          successMessage: 'BOLT12 Pay is ready',
          errorMessage: 'BOLT12 Pay web interface is not ready',
        }),
    },
    requires: [],
  })
})
