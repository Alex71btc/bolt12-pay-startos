import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const v_0_2_93_0 = VersionInfo.of({
  version: '0.2.93:0',
  releaseNotes: {
    en_US:
      'Update bundled lndk-pay to upstream 0.2.93: improved UX and internationalization handling, including browser language detection, translation consistency, and session persistence fixes.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
