import { useState, Fragment } from 'react'

import { FlightDetailInfo, Navbar, Button } from '../../components'
import InfoFlightItem from '../../components/flightItem/infoFlightItem'

import { formatNumberWithCommas } from '../../utils/parser'

function FlightDetail() {
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
  const calculateTotalPrice = () => {
    //price * tax 5%
    return flightDetail.price + flightDetail.price * 0.05
  }
  return (
    <Fragment>
      <Navbar />
      <div className="grid grid-cols-12 w-4/5 mx-auto gap-6 my-10">
        <div className="col-span-7 h-full bg-white rounded-xl divide-y-2">
          <div className="py-10 px-12 h-64">
            <InfoFlightItem
              departureTime={flightDetail.departureTime}
              arrivalTime={flightDetail.arrivalTime}
              departureCode={flightDetail.departureCode}
              arrivalCode={flightDetail.arrivalCode}
            />
          </div>
          <div className="py-10 px-12">
            <h2 className="text-2xl font-semibold text-slate-600">Flight information</h2>
            <FlightDetailInfo
              aircraftCode={flightDetail.aircraftCode}
              aircraftName={flightDetail.aircraftName}
              departureTime={flightDetail.departureTime}
              arrivalTime={flightDetail.arrivalTime}
              departureCode={flightDetail.departureCode}
              arrivalCode={flightDetail.arrivalCode}
              departureName={flightDetail.departureName}
              arrivalName={flightDetail.arrivalName}
              departureCityName={flightDetail.departureCityName}
              arrivalCityName={flightDetail.arrivalCityName}
              price={flightDetail.price}
            />
          </div>
        </div>
        <div className="col-span-5 h-96 bg-white rounded-xl divide-y-2">
          <div className="py-10 px-12 ">
            <h2 className="text-2xl font-semibold text-slate-600">Booking Flight Ticket</h2>
            <div className="flex flex-col gap-2 mt-8">
              <div className="flex flex-row">
                <p className=" text-slate-500">Flight Price</p>
                <p className=" font-medium text-slate-600 ml-auto">
                  {formatNumberWithCommas(flightDetail.price)} VNĐ
                </p>
              </div>
              <div className="flex flex-row">
                <p className="text-lg text-slate-500">Taxes</p>
                <p className="text-lg font-medium text-slate-600 ml-auto">5%</p>
              </div>
            </div>
            <div className="flex flex-row mt-6">
              <p className="text-xl font-medium text-primary">Total Price</p>
              <p className="text-xl font-semibold text-primary ml-auto">
                {formatNumberWithCommas(flightDetail.price + flightDetail.price * 0.05)} VNĐ
              </p>
            </div>
          </div>
          <div className="py-10 px-12">
            <Button isWidthFull={true} content={'Book Fight'} />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default FlightDetail
