import { T } from '@start9labs/start-sdk'
import { sdk } from './sdk'

export const uiPort = 8081

export async function getNonLocalUrls(effects: T.Effects): Promise<string[]> {
  return sdk.serviceInterface
    .getOwn(effects, 'ui', (i) => i?.addressInfo?.nonLocal.format() || [])
    .const()
}

/**
 * Map the StartOS primary URL onto the app's native LNURL / BIP353 env vars.
 * Upstream reads these as defaults; the in-app admin config still overrides
 * them. Returns {} when no primary URL is set.
 */
export function lnurlEnv(
  primaryUrl: string | null | undefined,
): Record<string, string> {
  if (!primaryUrl) return {}
  const url = primaryUrl.trim().replace(/\/+$/, '')
  let host = ''
  try {
    host = new URL(url).hostname.toLowerCase()
  } catch {
    return {}
  }
  return {
    LNURL_BASE_URL: url,
    LNURL_BASE_DOMAIN: host,
    PUBLIC_LNURL_ADDRESS: `lnurl@${host}`,
    PUBLIC_BIP353_ADDRESS: `bolt12@${host}`,
  }
}
