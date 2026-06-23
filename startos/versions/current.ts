import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.2.110:0',

  releaseNotes: {
    en_US:
      'Add LND 0.21 payment compatibility. Uses native-onion-messages-v2 runtime and automatically falls back to RouterRPC for BOLT11/LNURL payments on LND 0.21+. Includes latest amountless offer fixes.',
  },
  migrations: {
    up: async () => {},
    down: async () => {},
  },
})
