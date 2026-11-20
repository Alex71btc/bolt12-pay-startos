import { FileHelper, z } from '@start9labs/start-sdk'
import { sdk } from '../sdk'

// The application's own config, read and written by upstream; only the UI password hash is modelled.
const shape = z.looseObject({
  ui_password_hash: z.string().optional().catch(undefined),
})

export const configJson = FileHelper.json(
  { base: sdk.volumes.main, subpath: '/config.json' },
  shape,
)
