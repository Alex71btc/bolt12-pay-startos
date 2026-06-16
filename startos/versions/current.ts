import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.2.106:0',

  releaseNotes: {
    en_US:
      'Added Privacy Mode. Optional BOLT12 + BIP353 only operation without LNURL endpoints. Improved setup UI and payment mode selection.',
  },
  migrations: {
    up: async () => {},
    down: async () => {},
  },
})
