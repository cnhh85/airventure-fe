import API_URL from '../../config'
import { get, post } from '../ApiCaller'

const AUTHENTICATE_URL = API_URL + '/v1/api/auth/login'
const REGISTER_URL = API_URL + '/v1/api/auth/register'
const GOOGLE_LOGIN_URL = API_URL + '/v1/api/auth/google'

export default {
  // data = {email: "", password: ""}
  authenticate: (data) => {
    return post(AUTHENTICATE_URL, data)
  },
  //data = {firstName: "", lastName: "", gender: "", phoneNumber: "", email: "", password: ""}
  register: (data) => {
    return post(REGISTER_URL, data)
  },
  googleLogin: () => {
    return get(GOOGLE_LOGIN_URL)
  },
}
