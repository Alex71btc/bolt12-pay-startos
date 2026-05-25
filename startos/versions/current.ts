import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.2.92:0',
  releaseNotes: {
    en_US:
      'Update bundled lndk-pay to latest upstream: English default UI, improved onboarding UX, and clearer onion-message setup guidance.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
