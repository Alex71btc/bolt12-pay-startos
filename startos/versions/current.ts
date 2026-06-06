import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.2.102:0',
  releaseNotes: {
    en_US:
      'Updated bundled lndk-pay to 0.2.102. Removed relay.alex71btc.com from default and legacy relay configurations, added support for private/local ws:// relays, and improved Nostr relay configuration handling.',
  },
  migrations: {
    up: async () => {},
    down: async () => {},
  },
})
