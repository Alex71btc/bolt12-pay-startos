import { FileHelper, z } from '@start9labs/start-sdk'
import { sdk } from '../sdk'

const shape = z
  .object({
    url: z.string().catch(''),
  })
  .strip()

export const primaryUrlJson = FileHelper.json(
  {
    base: sdk.volumes.main,
    subpath: 'primary-url.json',
  },
  shape,
)
