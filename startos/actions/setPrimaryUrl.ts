import { storeJson } from '../fileModels/store.json'
import { sdk } from '../sdk'
import { getNonLocalUrls } from '../utils'

const { InputSpec, Value } = sdk

export const inputSpec = InputSpec.of({
  url: Value.dynamicSelect(async ({ effects }) => {
    const urls = await getNonLocalUrls(effects)
    return {
      name: 'URL',
      values: urls.reduce(
        (obj, url) => ({ ...obj, [url]: url }),
        {} as Record<string, string>,
      ),
      default: '',
    }
  }),
})

export const setPrimaryUrl = sdk.Action.withInput(
  // id
  'set-primary-url',

  // metadata
  async () => ({
    name: 'Set Primary URL',
    description:
      'Choose which of your BOLT12 Pay URLs to advertise as the public base for LNURL and Lightning Address. Use a clearnet or custom-domain URL — Tor and .local addresses will not resolve for external senders. The in-app admin settings can still override this. Changes apply on next restart.',
    warning: null,
    allowedStatuses: 'any',
    group: null,
    visibility: 'enabled',
  }),

  // form input
  inputSpec,

  // pre-fill with the current value
  async ({ effects }) => ({
    url: (await storeJson.read((s) => s.primaryUrl).once()) || undefined,
  }),

  // execution
  async ({ effects, input }) =>
    storeJson.merge(effects, { primaryUrl: input.url }),
)
