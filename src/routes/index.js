import React from 'react'

import { Routes, Route, Navigate } from 'react-router-dom'

import Auth from '../page/auth'
import Home from '../page/home'
import BookingHistory from '../page/profile/bookingHistory'
import Profile from '../page/profile/profile'
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
  {
    name: 'home',
    path: '/',
    element: <Home />,
  },
  {
    name: 'profile',
    path: '/profile',
    element: <Profile />,
  },
  {
    name: 'history',
    path: '/history',
    element: <BookingHistory />,
  },
]
export const privateRoute = []

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
