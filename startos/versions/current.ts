import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.2.109:1',

  releaseNotes: {
    en_US:
      'Use upstream native-onion-messages-v2 runtime. Adds LND 0.21 native onion messaging compatibility and latest amountless offer fixes.',
  },
  migrations: {
    up: async () => {},
    down: async () => {},
  },
})
