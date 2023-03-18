import { useEffect, useState } from 'react'

import { Navbar, SelectBox } from '../../components'

import BackGround from '../../assets/img/homeBg.png'
import SearchIcon from '../../assets/svg/search-outline.svg'
import LocalStorageUtils from '../../utils/LocalStorageUtils'
import bookingApis from '../../utils/api/bookingApis'

const Home = () => {
  const URL = window.location.search
  const urlParams = new URLSearchParams(URL)
  const token = urlParams.get('token')
  if (token) {
    LocalStorageUtils.setItem('token', token)
    window.location.href = '/'
  }

  const [flightList, setFlightList] = useState([])
  const [airportList, setAirportList] = useState([])
  // const [flightList, setFlightList] = useState([])
  // const [flightList, setFlightList] = useState([])
  const [searchDate, setSearchDate] = useState(null)

  const handleSelect = (option) => {
    setSelectedOption(option)
  }

  useEffect(() => {
    const getFlightList = async () => {
      const promiseResult = await bookingApis.getFlight()
      setFlightList(promiseResult.data.data)
    }
    const getAirport = async () => {
      const promiseResult = await bookingApis.getAirport()
      setAirportList(promiseResult.data.data)
      console.log(promiseResult.data.data)
    }
    getFlightList()
    getAirport()
  }, [])

  const handleSearchDate = (date) => {
    setSearchDate(date)
  }

  const filterFlight = async () => {
    const dateArray = searchDate.split('/')

    const yyyy = dateArray[2]
    let mm = dateArray[1]
    let dd = dateArray[0]

    const formattedDay = yyyy + '-' + mm + '-' + dd

    const searchResult = await bookingApis.searchFlight({
      departureCode: 'DAD',
      arrivalCode: 'VCA',
      departDate: formattedDay,
    })
    setFlightList(searchResult.data.data)
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
                  selection={airportList}
                  onSelect={handleSelect}
                />
                <div className="border border-slate-200 z-30"></div>
                <SelectBox
                  placeHolder={'Choose your destination'}
                  label={'Arrival'}
                  selection={airportList}
                  onSelect={handleSelect}
                />
              </div>
              <div className="w-[250px]">
                <SelectBox
                  placeHolder={'Add dates'}
                  label={'Departure Date'}
                  selection={airportList}
                  onSelect={handleSelect}
                  type={'date'}
                  value={handleSearchDate}
                />
              </div>

              <div className="flex rounded-xl bg-primary w-[130px] ml-4 text-center items-center cursor-pointer hover:bg-primaryHover ">
                <div className="flex flex-col space-y-1 m-auto" onClick={() => filterFlight()}>
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
