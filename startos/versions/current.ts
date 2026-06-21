import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.2.109:0',

  releaseNotes: {
    en_US:
      'Native onion messaging support for LND v0.21.x, future-proof BOLT12 compatibility without custom protocol patches.',
  },
  migrations: {
    up: async () => {},
    down: async () => {},
  },
})
