import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.2.104:0',
  releaseNotes: {
    en_US:
      'Updated bundled lndk-pay to 0.2.104. Added authenticated payment API checks and CSRF protection. Includes previous relay cleanup and support for private/local ws:// relays.',
  },
  migrations: {
    up: async () => {},
    down: async () => {},
  },
})
