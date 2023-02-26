import React from 'react'

import { Routes, Route, Navigate } from 'react-router-dom'

import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const publicRoute = [
  {
    name: 'login',
    path: '/login',
    element: <div />,
  },
]
export const privateRoute = [
  {
    name: 'home',
    path: '/',
    element: <div />,
  },
]

export const Switch = () => {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute />}>
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
