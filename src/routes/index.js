import React from 'react'

import { Routes, Route, Navigate } from 'react-router-dom'

import AccountManagement from '../page/accountManagement/index.'
import Auth from '../page/auth'
import { LogoutRoute } from '../page/auth/logout'
import FlightDetail from '../page/flightDetail'
import Home from '../page/home'
import PendingReservation from '../page/pendingReservation'
import ReservationList from '../page/reservationList'
import SuccessPage from '../page/successPage'
import BookingHistory from '../page/user/bookingHistory'
import Profile from '../page/user/profile'
import { AdministratorRoute } from './AdminRoute'
import { EmployeeRoute } from './EmployeeRoute'
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
  {
    name: 'success',
    path: '/success',
    element: <SuccessPage />,
  },
]
export const privateRoute = [
  {
    name: 'logout',
    path: '/logout',
    element: <LogoutRoute />,
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
      <Route element={<Navigate to="/" replace />} />
    </Routes>
  )
}
export default Switch
