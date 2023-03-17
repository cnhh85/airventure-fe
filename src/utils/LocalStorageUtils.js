import jwt_decode from 'jwt-decode'

import {
  LOCALSTORAGE_AVATAR_NAME,
  LOCALSTORAGE_JWT_USER_NAME,
  LOCALSTORAGE_TOKEN_NAME,
  LOCALSTORAGE_USER_NAME,
} from '../config'
import { get } from './ApiCaller'

class LocalStorageUtils {
  getItem(key, defaultValue = '""') {
    if (typeof localStorage === 'undefined') {
      return undefined
    }
    let item = localStorage.getItem(key)
    if (item && item === 'undefined') {
      item = defaultValue
    }
    return JSON.parse(item)
  }

  setItem(key, value = '') {
    if (typeof localStorage !== 'undefined') {
      try {
        localStorage.setItem(key, JSON.stringify(value))
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e)
      }
    }
  }

  removeItem(key) {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem(key)
    }
  }

  getJWTUser() {
    if (typeof localStorage !== 'undefined') {
      const token = this.getItem(LOCALSTORAGE_TOKEN_NAME)
      if (token) {
        try {
          const jwtUser = jwt_decode(token)
          return jwtUser
        } catch (err) {
          if (err.response && err.response.status === 401) {
            this.deleteUser()
          }
        }
      } else return token
    }
    return undefined
  }

  async getUser() {
    if (typeof localStorage !== 'undefined') {
      const token = this.getItem(LOCALSTORAGE_TOKEN_NAME)
      const user = this.getItem(LOCALSTORAGE_USER_NAME)
      const avatar = this.getItem(LOCALSTORAGE_AVATAR_NAME)
      if (user && avatar) {
        return { user: user, avatar: avatar }
      } else {
        if (token) {
          try {
            const { id } = jwt_decode(token)
            const fetchedUser = await get(
              `/v1/api/customers/get-by-account/${id}`,
              {},
              {},
              { Authorization: `Bearer ${token}` }
            ).then((res) => {
              return res.data.data
            })

            const simplifiedUser = {
              accountId: fetchedUser?.account.id,
              customerId: fetchedUser.id,
              lastName: fetchedUser.lastName,
              firstName: fetchedUser.firstName,
              email: fetchedUser.account?.email,
              gender: fetchedUser.gender,
              phoneNumber: fetchedUser.phoneNumber,
              role: fetchedUser?.account.role,
            }
            const simplifiedAvatar = fetchedUser?.account.image

            this.setItem(LOCALSTORAGE_AVATAR_NAME, simplifiedAvatar)
            this.setItem(LOCALSTORAGE_USER_NAME, simplifiedUser)

            return { user: simplifiedUser, avatar: simplifiedAvatar }
          } catch (err) {
            // eslint-disable-next-line no-console
            console.log(err)
            if (err.response && err.response.status === 401) {
              this.deleteUser()
            }
          }
        } else {
          return token
        }
      }
    }
  }

  deleteUser() {
    localStorage.removeItem(LOCALSTORAGE_AVATAR_NAME)
    localStorage.removeItem(LOCALSTORAGE_USER_NAME)
    localStorage.removeItem(LOCALSTORAGE_JWT_USER_NAME)
    localStorage.removeItem(LOCALSTORAGE_TOKEN_NAME)
  }

  getToken() {
    return this.getItem(LOCALSTORAGE_TOKEN_NAME)
  }

  clear() {
    localStorage.clear()
  }
}

export default new LocalStorageUtils()
