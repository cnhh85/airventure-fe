import LocalStorageUtils from './LocalStorageUtils'

export const HandleLogin = () => {
  const URL = window.location.search
  const urlParams = new URLSearchParams(URL)
  const token = urlParams.get('token')
  LocalStorageUtils.setJWTUser(token)
  window.location.href = '/'
}
