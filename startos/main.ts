import { sdk } from './sdk'
import { uiPort } from './utils'
import { primaryUrlJson } from './fileModels/primaryUrl.json'

export const main = sdk.setupMain(async ({ effects }) => {
  console.info('Starting BOLT12 Pay!')

  const primaryUrl = (await primaryUrlJson.read((s) => s.url).const(effects)) || ''

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
      env: {
        PRIMARY_URL: primaryUrl,
        PUBLIC_BASE_URL: primaryUrl,
        LNURL_BASE_URL: primaryUrl,
      },
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
