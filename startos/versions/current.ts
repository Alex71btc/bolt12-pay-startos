import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.2.99:0',
  releaseNotes: {
    en_US:
      'Updated bundled lndk-pay to 0.2.99. Simplified StartOS onboarding using the new LND Auto-Configure workflow for Onion Messages. Improved setup reliability when setup configuration is not yet available.',
  },
  migrations: {
    up: async () => {},
    down: async () => {},
  },
})
