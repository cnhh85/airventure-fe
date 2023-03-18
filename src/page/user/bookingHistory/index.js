import { Fragment, useEffect, useState } from 'react'

import { FlightItem, Navbar } from '../../../components'

import { LOCALSTORAGE_TOKEN_NAME } from '../../../config'
import { post } from '../../../utils/ApiCaller'
import LocalStorageUtils from '../../../utils/LocalStorageUtils'

// import userApis from '../../../utils/api/userApis'

function BookingHistory() {
  const [flights, setFlights] = useState([])
  const [flightDetail, setFlightDetail] = useState({
    aircraftCode: 'ABA254',
    aircraftName: 'AIRBUS A350',
    departureTime: '2021-08-01T10:00:00.000Z',
    arrivalTime: '2021-08-01T12:00:00.000Z',
    departureCode: 'CGK',
    departureName: 'Tan Son Nhat Internamtional Airport',
    arrivalCode: 'PQC',
    arrivalName: 'Phu Quoc International Airport',
    departureCityName: 'Ho Chi Minh City',
    arrivalCityName: 'Phu Quoc',
    price: 1200000,
  })
  const buttonProps = [
    {
      buttonName: 'View Detail',
      iconName: 'eye-outline',
      onClickButton: () => {},
      variant: 'primary',
    },
  ]

  useEffect(() => {
    const getFlights = async () => {
      const user = LocalStorageUtils.getJWTUser()
      const accountId = user.id
      const promiseResult = await post(
        `/v1/api/accounts/booking-history`,
        { accountId },
        {},
        { Authorization: `Bearer ${LocalStorageUtils.getItem(LOCALSTORAGE_TOKEN_NAME)}` }
      )
      const response = promiseResult.data.data
      setFlights([...response])
    }
    getFlights()
  }, [])

  return (
    <Fragment>
      <Navbar />
      <h1 className="text-3xl font-semibold text-center my-8 mt-40">Booking History</h1>
      <div className="grid grid-cols-12 w-4/5 mx-auto gap-6 pb-20 pt-10">
        <div className="flex flex-col gap-4 col-span-12">
          {flights && flights.length > 0
            ? flights.map((flight) => (
                <FlightItem
                  key={flight.ticket?.id}
                  price={flight.ticket?.price}
                  departureTime={flight.ticket?.flight?.departTime}
                  arrivalTime={flight.ticket?.flight?.arriveTime}
                  departureCode={flight.ticket?.flight?.departure?.code}
                  arrivalCode={flight.ticket?.flight?.arrival?.code}
                  reservationCode={flight.ticket?.reservationCode}
                  ticketStatus={flight.ticket?.status}
                  seatCode={flight.ticket?.seat}
                  isFullWidth={false}
                />
              ))
            : null}
        </div>
      </div>
    </Fragment>
  )
}

export default BookingHistory
