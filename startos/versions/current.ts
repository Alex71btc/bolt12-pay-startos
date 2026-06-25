import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.2.111:0',

  releaseNotes: {
    en_US:
      'Adds full LND 0.21 compatibility. Supports native onion messaging, RouterRPC payment fallback for LND 0.21+, and restores the latest amountless offer fixes. Verified on both LND 0.20.1 and LND 0.21.',
  },

  migrations: {
    up: async () => {},
    down: async () => {},
  },
})
