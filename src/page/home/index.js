import { Navbar, SelectBox } from '../../components'

import BackGround from '../../assets/img/homeBg.png'
import SearchIcon from '../../assets/svg/search-outline.svg'
import LocalStorageUtils from '../../utils/LocalStorageUtils'

const Home = () => {
  const URL = window.location.search
  const urlParams = new URLSearchParams(URL)
  const token = urlParams.get('token')
  if (token) {
    LocalStorageUtils.setItem('token', token)
    window.location.href = '/'
  }

  const departureArray = [
    {
      id: 1,
      name: 'Ha Noi',
    },
    {
      id: 2,
      name: 'Ho Chi Minh',
    },
    {
      id: 3,
      name: 'Da Nang',
    },
  ]

  const handleSelect = (option) => {
    setSelectedOption(option)
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="relative ">
        <h2 className="absolute text-center w-full font-[700] text-[57px] text-white top-28 justify-center items-center">
          Let’s explore the world
        </h2>
        <img src={BackGround} alt="" className="w-screen" />
        <div className="absolute w-full top-[85%] flex">
          <div className="h-[240px] bg-white mx-auto p-9 rounded-xl shadow-custom">
            <h3 className="text-slate-700 font-semibold text-2xl">Search Flight</h3>
            <p className="text-slate-500 mt-2">Find your flight by choosing your destination</p>
            <div className="flex mt-6">
              <div className="flex flex-row mr-4 bg-surface rounded-xl ">
                <SelectBox
                  placeHolder={'Choose your departure'}
                  label={'Departure'}
                  selection={departureArray}
                  onSelect={handleSelect}
                />
                <div className="border border-slate-200 z-30"></div>
                <SelectBox
                  placeHolder={'Choose your destination'}
                  label={'Arrival'}
                  selection={departureArray}
                  onSelect={handleSelect}
                />
              </div>
              <div className="w-[250px]">
                <SelectBox
                  placeHolder={'Add dates'}
                  label={'Departure Date'}
                  selection={departureArray}
                  onSelect={handleSelect}
                  type={'date'}
                />
              </div>

              <div className="flex rounded-xl bg-primary w-[130px] ml-4 text-center items-center cursor-pointer hover:bg-primaryHover ">
                <div className="flex flex-col space-y-1 m-auto">
                  <img src={SearchIcon} alt="" className="mx-auto" />
                  <p className="text-white font-semibold">Browse</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
