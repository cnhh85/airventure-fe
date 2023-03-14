import React from 'react'

import Background from '../../assets/img/loginBackground.png'

const Auth = () => {
  return (
    <div className="max-h-screen">
      <div className="mx-auto grid grid-cols-12">
        <div className="col-span-5 h-screen relative overflow-hidden">
          <div className="w-full text-center text-light-gray absolute top-[75%]">
            <h3 className="font-medium text-4xl w-[480px] mx-auto mb-2">
              Travel in style with AirVenture
            </h3>
            <p className="text-[#C1C7CE] text-[15px] w-[480px] mx-auto">
              AirVenture is the ultimate flight booking app for those who seek a luxurious and
              personalized travel experience. With AirVenture, you can book exclusive flights to
              your favorite destinations with ease and enjoy a stress-free travel experience.
              Discover the world in style with AirVenture.
            </p>
          </div>
          <img
            className="object-contain w-full absolute top-[-25%] -z-50"
            src={Background}
            alt=""
          />
        </div>
        <div className="flex">
          <div className="w-[480px] mx-auto py-auto">
            <h3 className="">Welcome back to AirVenture</h3>
            <p className="">Log in to AirVenture and unlock exclusive flight bookings.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth
