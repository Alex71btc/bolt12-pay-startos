import { primaryUrlJson } from '../fileModels/primaryUrl.json'
import { sdk } from '../sdk'

const { InputSpec, Value } = sdk

export const inputSpec = InputSpec.of({
  url: Value.text({
    name: 'Primary URL',
    description:
      'Public URL BOLT12 Pay should use, for example https://startos040.alex71btc.com',
    default: '',
    required: false,
    masked: false,
  }),
})

export const setPrimaryUrl = sdk.Action.withInput(
  'set-primary-url',
  async () => ({
    name: 'Set Primary URL',
    description:
      'Set the public URL BOLT12 Pay should use for LNURL, Lightning Address, BOLT12 and Nostr identity links.',
    warning: null,
    allowedStatuses: 'any',
    group: null,
    visibility: 'enabled',
  }),
  inputSpec,
  async () => ({
    url: (await primaryUrlJson.read((s) => s.url).once()) || '',
  }),
  async ({ effects, input }) =>
    primaryUrlJson.merge(effects, { url: input.url || '' }),
)
