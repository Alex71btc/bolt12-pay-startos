import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const v_0_2_85_1 = VersionInfo.of({
  version: '0.2.85:1',
  releaseNotes: {
    en_US:
      'Update bundled lndk-pay to latest upstream: clearer onion-message LND setup guidance in the web UI.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
