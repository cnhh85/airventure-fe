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
        <div className="flex items-center col-span-7">
          <div className="w-[480px] h-fit mx-auto">
            <div className="top-50%">
              <div className="text-center">
                <h3 className="font-[500]] text-[32px] text-[#1A1C1E]">
                  Welcome back to AirVenture
                </h3>
                <p className="font-[400] text-[16px] text-[#72787E]">
                  Log in to AirVenture and unlock exclusive flight bookings.
                </p>
              </div>
              <div>
                <button
                  type="button"
                  className="text-[#1A1C1E] w-[80%] border border-solid border-1 border-[#E0E0E0] hover:bg-[#f0f1f0] font-medium rounded-lg text-sm py-2.5 text-center flex items-center mx-auto my-2"
                >
                  <div className="mx-auto flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 -ml-1"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="google"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 488 512"
                    >
                      <path
                        fill="currentColor"
                        d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                      ></path>
                    </svg>
                    Log in with Google
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth
