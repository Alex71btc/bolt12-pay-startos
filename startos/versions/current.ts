import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.2.113:0',

  releaseNotes: {
  en_US:
    'Fixes RouterRPC payments on LND 0.21 by applying a default fee limit only when using the RouterRPC payment endpoint. Restores full compatibility with both LND 0.20.x and LND 0.21.x payment flows.',
  },
  migrations: {
    up: async () => {},
    down: async () => {},
  },
})
