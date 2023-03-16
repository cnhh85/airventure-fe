import { React, useState } from 'react'

import BackGround from '../../assets/img/homeBg.png'
import SearchIcon from '../../assets/svg/search-outline.svg'

const Home = () => {
  const [isOpenDeparture, setIsOpenDeparture] = useState(false)
  const [isOpenArrival, setIsOpenArrival] = useState(false)
  const [isOpenDate, setIsOpenDate] = useState(false)

  const toggleDeparture = () => {
    setIsOpenDeparture(!isOpenDeparture)
  }
  const toggleArrival = () => {
    setIsOpenArrival(!isOpenArrival)
  }
  const toggleDate = () => {
    setIsOpenDate(!isOpenDate)
  }
  return (
    <div className="min-h-screen">
      <div className="pt-20 relative ">
        <h2 className="absolute text-center w-full font-[700] text-[57px] text-white top-28 justify-center items-center">
          Let’s explore the world
        </h2>
        <img src={BackGround} alt="" className="w-screen" />
        <div className="absolute w-full top-[85%] flex">
          <div className="w-[1024px] h-[240px] bg-white mx-auto p-9 rounded-xl shadow-sm">
            <h3 className="text-[#1A1C1E] font-[400] text-[24px]">Search Flight</h3>
            <p className="text-[14px] font-[400] text-[#72787E]">
              Find your flight by choosing your destination
            </p>
            <div className="flex mt-6">
              <div className="flex rounded-xl bg-[#EDEDED] mr-4">
                <button
                  className="px-5 py-2 cursor-pointer text-left relative"
                  onClick={toggleDeparture}
                >
                  <h5 className="text-[#72787E] text-[14px] font-semibold">Departure</h5>
                  <div className="inline-block text-left">
                    <div>
                      <div
                        className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-[#EDEDED] py-2 text-[16px] font-regular text-[#1A1C1E] hover:bg-[#EDEDED]/30"
                        id="menu-button"
                        aria-expanded="true"
                        aria-haspopup="true"
                      >
                        Select your destination
                        <svg
                          className="-mr-1 h-5 w-5 text-gray-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>

                    <div
                      className={`absolute right-0 mt-3 w-56 origin-top-right rounded-md bg-[#ededed] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
                        isOpenDeparture ? 'block' : 'hidden'
                      }`}
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                      tabIndex="-1"
                    >
                      <div className="py-1" role="none">
                        <div
                          href="#"
                          className="text-gray-700 z-10 block px-4 py-2 text-sm hover:bg-[#ffffff9a]"
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-0"
                        >
                          Ha Noi
                        </div>
                        <div
                          href="#"
                          className="text-gray-700 block px-4 py-2 text-sm hover:bg-[#ffffff9a]"
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-1"
                        >
                          Ha Noi
                        </div>
                        <div
                          href="#"
                          className="text-gray-700 block px-4 py-2 text-sm hover:bg-[#ffffff9a]"
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-2"
                        >
                          Ha Noi
                        </div>
                      </div>
                    </div>
                  </div>
                </button>

                <div className="border border-y-0 mx-2"></div>

                <button
                  className="px-5 py-2 cursor-pointer text-left relative"
                  onClick={toggleArrival}
                >
                  <h5 className="text-[#72787E] text-[14px] font-semibold">Arrival</h5>
                  <div className="inline-block text-left">
                    <div>
                      <div
                        className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-[#EDEDED] py-2 text-[16px] font-regular text-[#1A1C1E] hover:bg-[#EDEDED]/30"
                        id="menu-button"
                        aria-expanded="true"
                        aria-haspopup="true"
                      >
                        Select your destination
                        <svg
                          className="-mr-1 h-5 w-5 text-gray-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>

                    <div
                      className={`absolute right-0 mt-3 w-56 origin-top-right rounded-md bg-[#ededed] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
                        isOpenArrival ? 'block' : 'hidden'
                      }`}
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                      tabIndex="-1"
                    >
                      <div className="py-1" role="none">
                        <div
                          href="#"
                          className="text-gray-700 z-10 block px-4 py-2 text-sm hover:bg-[#ffffff9a]"
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-0"
                        >
                          Ha Noi
                        </div>
                        <div
                          href="#"
                          className="text-gray-700 block px-4 py-2 text-sm hover:bg-[#ffffff9a]"
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-1"
                        >
                          Ha Noi
                        </div>
                        <div
                          href="#"
                          className="text-gray-700 block px-4 py-2 text-sm hover:bg-[#ffffff9a]"
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-2"
                        >
                          Ha Noi
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
              <div className="flex rounded-xl bg-[#EDEDED] w-[250px] mr-4">
                <button
                  className="px-5 py-2 cursor-pointer text-left relative w-full"
                  onClick={toggleDate}
                >
                  <h5 className="text-[#72787E] text-[14px] font-semibold">Departure date</h5>
                  <div className="inline-block text-left w-full">
                    <div className="flex w-full justify-center gap-x-1.5 rounded-md bg-[#EDEDED] py-2 text-[16px] font-regular text-[#1A1C1E] hover:bg-[#EDEDED]/30">
                      <div className="mr-auto">Add dates</div>
                      <div className="ml-auto">
                        <svg
                          className="-mr-1  h-5 w-5 text-gray-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`absolute right-0 mt-3 w-56 origin-top-right rounded-md bg-[#ededed] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
                      isOpenDate ? 'block' : 'hidden'
                    }`}
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                  >
                    <div className="py-1" role="none">
                      <div
                        href="#"
                        className="text-gray-700 z-10 block px-4 py-2 text-sm hover:bg-[#ffffff9a]"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-0"
                      >
                        Ha Noi
                      </div>
                      <div
                        href="#"
                        className="text-gray-700 block px-4 py-2 text-sm hover:bg-[#ffffff9a]"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-1"
                      >
                        Ha Noi
                      </div>
                      <div
                        href="#"
                        className="text-gray-700 block px-4 py-2 text-sm hover:bg-[#ffffff9a]"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-2"
                      >
                        Ha Noi
                      </div>
                    </div>
                  </div>
                </button>
              </div>

              <div className="flex rounded-xl bg-[#3898D3] w-[130px] h-[80px] text-center items-center justify-center cursor-pointer">
                <div className="">
                  <img src={SearchIcon} alt="" className="mx-auto" />
                  <p className="text-white">Browse</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#EDEDED] w-screen h-screen"></div>
    </div>
  )
}

export default Home
