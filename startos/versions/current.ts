import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.2.108:0',

  releaseNotes: {
    en_US:
      'Added BIP353 publishing from Offer History. Automatic DNS cleanup for BIP353 records when deleting history entries or clearing history. Create private BIP353 Lightning Addresses without exposing them on the public alias page. Includes Privacy Mode improvements.',
  },
  migrations: {
    up: async () => {},
    down: async () => {},
  },
})
