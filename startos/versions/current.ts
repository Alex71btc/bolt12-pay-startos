import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const v_0_2_94_0 = VersionInfo.of({
  version: '0.2.94:0',
  releaseNotes: {
    en_US:
      'Fix landing page copy button, public page language switching, amount translation consistency and toast styling improvements.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
