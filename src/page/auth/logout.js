import { Navigate } from 'react-router'

import LocalStorageUtils from '../../utils/LocalStorageUtils'

export const LogoutRoute = () => {
  const user = LocalStorageUtils.getJWTUser()
  if (user) {
    LocalStorageUtils.deleteUser()
  }
  return <Navigate to="/" replace />
  // return user && user.id?.length >= 0 ? <Outlet /> : <Navigate to="/login" replace />
}
