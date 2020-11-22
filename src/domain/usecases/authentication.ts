import { AccountModel } from '../models/account-model'

type AthenticationParams = {
  email: string
  password: string
}

export interface Authentication {
  auth(params: AthenticationParams): Promise<AccountModel>
}
