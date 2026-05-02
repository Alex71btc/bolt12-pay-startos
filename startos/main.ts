import { sdk } from './sdk'
import { uiPort } from './utils'

function normalizePrimaryUrl(url: string): string {
  const trimmed = (url || '').trim().replace(/\/+$/, '')
  if (!trimmed) return ''
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) return trimmed
  return `https://${trimmed}`
}

export const main = sdk.setupMain(async ({ effects }) => {
  console.info('Starting BOLT12 Pay!')

  const primaryUrl = normalizePrimaryUrl(
    process.env.PRIMARY_URL ||
      process.env.PUBLIC_BASE_URL ||
      process.env.LNURL_BASE_URL ||
      '',
  )

  console.info('Using primary URL:', primaryUrl)

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
