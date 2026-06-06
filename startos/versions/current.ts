import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.2.101:0',
  releaseNotes: {
    en_US:
      'Updated bundled lndk-pay to 0.2.101. Removed the default relay.alex71btc.com relay, added support for private/local ws:// relays, and included reliability improvements for Nostr relay configuration.',
  },
  migrations: {
    up: async () => {},
    down: async () => {},
  },
})
