import { autoconfig } from 'lnd-startos/startos/actions/config/autoconfig'
import { sdk } from './sdk'

export const setDependencies = sdk.setupDependencies(async ({ effects }) => {
  // BOLT12 offers require onion-message support on LND. Post a one-click task
  // against LND's hidden autoconfig action instead of asking the user to edit
  // lnd.conf over SSH. With `input-not-matches`, the task clears once onion
  // messages are enabled and re-appears if the setting is ever reverted.
  await sdk.action.createTask(effects, 'lnd', autoconfig, 'critical', {
    input: { kind: 'partial', value: { 'onion-messages': true } },
    when: { condition: 'input-not-matches', once: false },
    reason:
      'BOLT12 Pay needs onion messages enabled on LND to create and pay BOLT12 offers.',
  })

  return {
    lnd: {
      kind: 'running',
      versionRange: '>=0.20.1-beta:12',
      healthChecks: ['lnd'],
    },
  }
})
