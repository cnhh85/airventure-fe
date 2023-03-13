import React from 'react'

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
          <a href="/all-flight" className="text-gray-700 hover:text-black px-3 py-2 rounded">
            All Flight
          </a>
          <a href="/schedule" className="text-gray-700 hover:text-black px-3 py-2 rounded">
            Schedule
          </a>
          <a href="/reservation" className="text-gray-700 hover:text-black px-3 py-2 rounded">
            Reservation
          </a>
        </div>
        <div className="ml-3 relative">
          <div className="flex flex-row  ">
            <button className="flex items-center text-sm focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out border border-solid border-[#DBDBDB] px-2 py-1 rounded-full">
              <img
                className="h-8 w-8 rounded-full object-cover"
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt="Profile"
              />
              <div className="text-gray-700 text-sm font-semibold ml-2">Jane Doe</div>
            </button>
          </div>
          <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
            <div className="py-1 rounded-md bg-white shadow-xs">
              <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Profile
              </a>
              <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Settings
              </a>
              <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Sign out
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
