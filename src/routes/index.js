import React from 'react'

import { Routes, Route, Navigate } from 'react-router-dom'

import Auth from '../page/auth'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

const publicRoute = [
  {
    name: 'login',
    path: '/login',
    element: <Auth page="login" />,
  },
  {
    name: 'register',
    path: '/register',
    element: <Auth page="register" />,
  },
]
const privateRoute = [
  {
    name: 'home',
    path: '/',
    element: <div />,
  },
]

const Switch = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        {privateRoute.map((route) => (
          <Route key={route.name} exact={true} path={route.path} element={route.element} />
        ))}
      </Route>
      <Route element={<PublicRoute />}>
        {publicRoute.map((route) => (
          <Route key={route.name} exact={true} path={route.path} element={route.element} />
        ))}
      </Route>
      <Route element={<Navigate to="/" replace />} />
    </Routes>
  )
}
export default Switch
