import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.2.105:0',

  releaseNotes: {
    en_US:
      'Updated bundled lndk-pay to 0.2.105. Added support for amountless BOLT12 offers, fixed payments for amountless offers including Ocean Mining payout offers, updated the bundled LNDK image with the payment fix, and improved amountless-offer UX and translations.',
  },
  migrations: {
    up: async () => {},
    down: async () => {},
  },
})
