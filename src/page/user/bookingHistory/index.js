import { Fragment, useState } from 'react'

import { FlightItem, Navbar, Filter } from '../../../components'

function BookingHistory() {
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

  return (
    <Fragment>
      <Navbar />
      <h1 className="text-3xl font-semibold text-center my-8">Booking History</h1>
      <div className="grid grid-cols-12 w-4/5 mx-auto gap-6">
        <div className="col-span-3 w-full bg-white rounded-xl">
          <Filter />
        </div>
        <div className="col-span-9">
          <FlightItem
            price={flightDetail.price}
            departureTime={flightDetail.departureTime}
            arrivalTime={flightDetail.arrivalTime}
            departureCode={flightDetail.departureCode}
            arrivalCode={flightDetail.arrivalCode}
            isFullWidth={false}
            buttonProps={buttonProps}
          />
        </div>
      </div>
    </Fragment>
  )
}

export default BookingHistory
