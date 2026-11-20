import { utils } from '@start9labs/start-sdk'
import { configJson } from '../fileModels/config.json'
import { storeJson } from '../fileModels/store.json'
import { sdk } from '../sdk'
import { hashUiPassword } from '../utils'

export const resetPassword = sdk.Action.withoutInput(
  'reset-password',

  async ({ effects }) => {
    const isSet = await storeJson.read((s) => s.uiPasswordSet).const(effects)
    return {
      name: isSet ? 'Reset UI Password' : 'Create UI Password',
      description: isSet
        ? 'Generate a new admin password for the BOLT12 Pay web interface'
        : 'Generate the admin password for the BOLT12 Pay web interface',
      warning: isSet
        ? 'Replaces the current BOLT12 Pay admin password, including one set in the web interface.'
        : null,
      allowedStatuses: 'any',
      group: null,
      visibility: 'enabled',
    }
  },

  async ({ effects }) => {
    const password = utils.getDefaultString({
      charset: 'a-z,A-Z,0-9',
      len: 32,
    })
    await configJson.merge(effects, {
      ui_password_hash: hashUiPassword(password),
    })
    await storeJson.merge(effects, { uiPasswordSet: true })

    return {
      version: '1',
      title: 'BOLT12 Pay Admin Password',
      message:
        'Use this password to sign in to the BOLT12 Pay web interface. Save it to a password manager.',
      result: {
        type: 'single',
        value: password,
        masked: true,
        copyable: true,
        qr: false,
        launchable: false,
      },
    }
  },
)
