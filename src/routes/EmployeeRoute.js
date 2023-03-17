import React from 'react'

import { Navigate, Outlet } from 'react-router-dom'

import LocalStorageUtils from '../utils/LocalStorageUtils'

export const EmployeeRoute = () => {
  const user = LocalStorageUtils.getJWTUser()
  if (user && user.id?.length >= 0) {
    if (user.role && user.role === 'Employee') {
      return <Outlet />
    } else {
      return <Navigate to="/" replace />
    }
  } else {
    return <Navigate to="/login" replace />
  }
}
