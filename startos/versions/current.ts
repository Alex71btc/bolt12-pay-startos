import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.2.105:1',

  releaseNotes: {
    en_US:
      'Updated bundled lndk-pay to 0.2.105:1. Fixed amountless offer history entries showing "1 sat default" instead of "Amountless offer".',
  },
  migrations: {
    up: async () => {},
    down: async () => {},
  },
})
