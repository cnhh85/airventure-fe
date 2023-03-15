import React from 'react'

import { Routes, Route, Navigate } from 'react-router-dom'

import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'
import Home from './page/home'

export const publicRoute = [
  {
    name: 'login',
    path: '/login',
    element: <div />,
  },
  {
    name: 'home',
    path: '/',
    element: <Home />,
  },
]
export const privateRoute = []

export const Switch = () => {
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
