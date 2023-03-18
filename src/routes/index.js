import React from 'react'

import { Routes, Route, Navigate } from 'react-router-dom'

import AccountManagement from '../page/accountManagement/index.'
import Auth from '../page/auth'
import { LogoutRoute } from '../page/auth/logout'
import FlightDetail from '../page/flightDetail'
import Home from '../page/home'
import PendingReservation from '../page/pendingReservation'
import ReservationList from '../page/reservationList'
import BookingHistory from '../page/user/bookingHistory'
import Profile from '../page/user/profile'
import { AdministratorRoute } from './AdminRoute'
import { AuthRoute } from './AuthRoute'
import { EmployeeRoute } from './EmployeeRoute'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

const publicRoute = [
  {
    name: 'home',
    path: '/',
    element: <Home />,
  },
  {
    name: 'reservation',
    path: '/reservation',
    element: <ReservationList />,
  },
  {
    name: 'flight-detail',
    path: '/flight-detail',
    element: <FlightDetail />,
  },
]
export const privateRoute = [
  {
    name: 'logout',
    path: '/logout',
    element: <LogoutRoute />,
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
export const administratorRoute = [
  {
    name: 'account-management',
    path: '/account-management',
    element: <AccountManagement />,
  },
]
export const employeeRoute = [
  {
    name: 'pending-reservation',
    path: '/pending-reservation',
    element: <PendingReservation />,
  },
]
export const authRoute = [
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
      <Route element={<AdministratorRoute />}>
        {administratorRoute.map((route) => (
          <Route key={route.name} exact={true} path={route.path} element={route.element} />
        ))}
      </Route>
      <Route element={<EmployeeRoute />}>
        {employeeRoute.map((route) => (
          <Route key={route.name} exact={true} path={route.path} element={route.element} />
        ))}
      </Route>
      <Route element={<AuthRoute />}>
        {authRoute.map((route) => (
          <Route key={route.name} exact={true} path={route.path} element={route.element} />
        ))}
      </Route>
      <Route element={<Navigate to="/" replace />} />
    </Routes>
  )
}
export default Switch
