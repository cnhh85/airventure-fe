import { Link } from 'react-router-dom'

import Popover from '../Popover'

const navOptions = [
  {
    name: 'All Flight',
    path: '/all-flight',
  },
  {
    name: 'Schedule',
    path: '/schedule',
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

function Navbar() {
  return (
    <nav className="bg-white h-67 flex items-center justify-between px-32 py-4">
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
        <Popover options={profileOptions}>
          <div className="flex items-center text-sm focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out border border-solid border-[#DBDBDB] px-2 py-1 rounded-full">
            <img
              className="h-8 w-8 rounded-full object-cover"
              src="https://randomuser.me/api/portraits/women/68.jpg"
              alt="Profile"
            />
            <div className="text-gray-700 text-sm font-semibold ml-2">Jane Doe</div>
          </div>
        </Popover>
      </div>
    </nav>
  )
}

export default Navbar
