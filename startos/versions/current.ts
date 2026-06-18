import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.2.108:1',

  releaseNotes: {
    en_US:
      'Bugfix release for BOLT12 offer creation reliability. Automatically retries transient LNDK TLS connection failures and prevents occasional first-attempt offer creation errors observed on some Umbrel systems.',
  },
  migrations: {
    up: async () => {},
    down: async () => {},
  },
})
