import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

import { get } from '../../utils/ApiCaller'
import LocalStorageUtils from '../../utils/LocalStorageUtils'
import Popover from '../popover'

const navOptions = [
  {
    name: 'All Flight',
    path: '/all-flight',
  },
  {
    name: 'Reservation',
    path: '/reservation',
  },
]

const profileOptions = [
  {
    name: 'Profile',
    path: '/profile',
    iconName: 'person-outline',
  },
  {
    name: 'Booking history',
    path: '/history',
    iconName: 'time-outline',
  },
  {
    name: 'Logout',
    path: '/logout',
    iconName: 'log-out-outline',
  },
]

const administratorProfileOptions = [
  {
    name: 'Accounts',
    path: '/account-management',
    iconName: 'people-outline',
  },
  ...profileOptions,
]

function Navbar() {
  const [userInfo, setUserInfo] = useState({})
  const [image, setImage] = useState(null)

  useEffect(() => {
    const jwtUser = LocalStorageUtils.getJWTUser()
    const token = LocalStorageUtils.getToken()
    const getUserInfo = async () => {
      // const user = await LocalStorageUtils.getUser()
      const promiseResult = await get(
        `/v1/api/customers/get-by-account/${jwtUser.id}`,
        {},
        {},
        { Authorization: `Bearer ${token}` }
      )
      const user = promiseResult.data.data
      setUserInfo({ customerId: user.id, firstName: user.firstName, lastName: user.lastName })
      setImage(user.account?.image)
    }
    getUserInfo()
  }, [])

  const user = LocalStorageUtils.getJWTUser()

  return (
    <nav className="bg-white h-67 flex items-center justify-between px-32 py-4 fixed top-0 z-50 w-full">
      <div className="text-center">
        <a href="/" className="font-bold text-xl">
          AirVenture
        </a>
      </div>
      <div className="flex w-full">
        <div className="m-auto">
          {navOptions.map((option) => (
            <Link
              key={option.name}
              to={option.path}
              className="text-gray-700 hover:text-black px-5 py-2 rounded"
            >
              {option.name}
            </Link>
          ))}
        </div>
        <Popover
          options={
            user && user.role === 'Administrator' ? administratorProfileOptions : profileOptions
          }
        >
          <div className="flex items-center text-sm focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out border border-solid border-[#DBDBDB] px-2 py-1 rounded-full">
            {user && userInfo ? (
              <>
                <img
                  className="h-8 w-8 rounded-full object-cover"
                  src={
                    image
                      ? image
                      : `https://avatar.oxro.io/avatar.svg?name=${[
                          userInfo.firstName,
                          userInfo.lastName,
                        ].join('+')}&caps=3&bold=true`
                  }
                  alt="Profile"
                />
                <div className="text-gray-700 text-sm font-semibold ml-2">
                  {`${userInfo.firstName} ${userInfo.lastName}`}
                </div>
              </>
            ) : (
              <>
                <img
                  className="h-8 w-8 rounded-full object-cover"
                  src={'https://randomuser.me/api/portraits/women/68.jpg'}
                  alt="Profile"
                />
                <div className="text-gray-700 text-sm font-semibold ml-2">User</div>
              </>
            )}
          </div>
        </Popover>
      </div>
    </nav>
  )
}

export default Navbar
