import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const v_0_2_85_0 = VersionInfo.of({
  version: '0.2.85:0',
  releaseNotes: {
    en_US: `
- Add Primary URL support (StartOS 0.4)
- Enable direct clearnet exposure (no Cloudflare tunnel required)
- Integrate Let's Encrypt production TLS
- Fix clipboard copy fallback for HTTP environments
`
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE
  }
})
