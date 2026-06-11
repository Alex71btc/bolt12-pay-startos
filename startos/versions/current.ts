import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.2.104:0',
  releaseNotes: {
    en_US:
      'Updated bundled lndk-pay to 0.2.104. Added authenticated payment API checks and CSRF protection. Added domain configuration documentation for BIP353, LNURL and Cloudflare DNS setup.',
  },
  migrations: {
    up: async () => {},
    down: async () => {},
  },
})
