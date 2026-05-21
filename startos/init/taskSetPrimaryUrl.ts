import { setPrimaryUrl } from '../actions/setPrimaryUrl'
import { storeJson } from '../fileModels/store.json'
import { sdk } from '../sdk'
import { getNonLocalUrls } from '../utils'

// LNURL / Lightning Address is optional, so we don't force a primary URL on
// first install. But if a previously-chosen URL is no longer available (e.g. a
// custom domain was removed), prompt the user to pick a new one.
export const taskSetPrimaryUrl = sdk.setupOnInit(async (effects) => {
  const url = await storeJson.read((s) => s.primaryUrl).const(effects)
  if (!url) return

  const availableUrls = await getNonLocalUrls(effects)
  if (!availableUrls.includes(url)) {
    await sdk.action.createOwnTask(effects, setPrimaryUrl, 'critical', {
      reason:
        'Your BOLT12 Pay primary URL is no longer available. Select a new one for LNURL / Lightning Address.',
    })
  }
})
