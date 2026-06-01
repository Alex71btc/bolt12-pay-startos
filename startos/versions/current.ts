import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const v_0_2_96_0 = VersionInfo.of({
  version: '0.2.96:0',
  releaseNotes: {
    en_US:
      'Security hardening for setup, alias and Cloudflare management endpoints. Added explicit backend authentication checks and enabled package downgrades.',
  },
  migrations: {
    up: async () => {},
    down: async () => {},
  },
})
