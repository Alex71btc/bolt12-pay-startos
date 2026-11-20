import { resetPassword } from '../actions/resetPassword'
import { configJson } from '../fileModels/config.json'
import { storeJson } from '../fileModels/store.json'
import { sdk } from '../sdk'
import { lockedUiPassword } from '../utils'

export const taskUiPassword = sdk.setupOnInit(async (effects) => {
  const isSet = await storeJson.read((s) => s.uiPasswordSet).const(effects)
  if (isSet) return

  // Upstream lets the first visitor set the password while none is stored, so one is always stored.
  if (await configJson.read((c) => c.ui_password_hash).once()) {
    // Existing passwords survive missing package state on upgrades and restores.
    if (isSet === undefined || isSet === null) {
      await storeJson.merge(effects, { uiPasswordSet: true })
      return
    }
  } else {
    await configJson.merge(effects, { ui_password_hash: lockedUiPassword() })
  }

  await storeJson.merge(effects, { uiPasswordSet: false })
  await sdk.action.createOwnTask(effects, resetPassword, 'critical', {
    reason: 'Create the admin password for the BOLT12 Pay web interface',
  })
})
