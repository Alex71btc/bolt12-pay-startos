import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const v_0_2_85_0 = VersionInfo.of({
  version: '0.2.85:0',
  releaseNotes: {
    en_US: 'Initial StartOS packaging of BOLT12 Pay.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
