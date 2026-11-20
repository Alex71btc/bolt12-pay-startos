import { primaryUrl } from '../primaryUrl'
import { sdk } from '../sdk'
import { resetPassword } from './resetPassword'

export const actions = sdk.Actions.of()
  .addAction(resetPassword)
  .addAction(primaryUrl.action)
