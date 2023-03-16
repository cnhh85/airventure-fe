import { API_URL, LOCALSTORAGE_TOKEN_NAME } from '../../config'
import { get, post, remove } from '../ApiCaller'
import LocalStorageUtils from '../LocalStorageUtils'

const GET_ACCOUNTS_URL = API_URL + '/v1/api/accounts'
const DEACTIVATE_ACCOUNT_URL = API_URL + '/v1/api/accounts/'

export default {
  getAccounts: () => {
    const TOKEN = LocalStorageUtils.getItem(LOCALSTORAGE_TOKEN_NAME)
    return get(GET_ACCOUNTS_URL, {}, {}, { Authorization: `Bearer ${TOKEN}` })
  },
  //data = {firstName: "", lastName: "", gender: "", phoneNumber: "", email: "", password: ""}
  //add a role attribute
  createEmployeeAccount: (data) => {
    return post(REGISTER_URL, data)
  },
  deactivateAccount: (id) => {
    return remove(DEACTIVATE_ACCOUNT_URL + id, {}, {}, { Authorization: `Bearer ${TOKEN}` })
  },
}
