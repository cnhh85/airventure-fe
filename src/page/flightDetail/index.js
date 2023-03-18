import { useState, Fragment, useEffect } from 'react'

// import { Navigate } from 'react-router'
import { FlightDetailInfo, Navbar, Button, Modal } from '../../components'
import InfoFlightItem from '../../components/flightItem/infoFlightItem'

import LocalStorageUtils from '../../utils/LocalStorageUtils'
import bookingApis from '../../utils/api/bookingApis'
import { formatNumberWithCommas } from '../../utils/parser'
import ContactInfoModal from './contactInfoModal'

function FlightDetail({}) {
  const [showModal, setShowModal] = useState(false)
  const [successInfo, setSuccessInfo] = useState(null)

  const URL = window.location.search
  const urlParams = new URLSearchParams(URL)
  const flightId = urlParams.get('flightId')

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
  const handleModalClick = () => {
    setShowModal(false)
  }

  useEffect(() => {
    const getFlightDetail = async () => {
      const promiseResult = await bookingApis.getFlightById(flightId)
      const response = promiseResult.data.data
      setFlightDetail((prev) => ({
        ...prev,
        id: response.id,
        aircraftCode: response.aircraft?.code,
        aircraftName: response.aircraft?.name,
        departureTime: response.departTime,
        arrivalTime: response.arriveTime,
        departureCode: response.departure?.code,
        departureName: response.departure?.name,
        arrivalCode: response.arrival?.code,
        arrivalName: response.arrival?.name,
        departureCityName: response.departure?.cityName,
        arrivalCityName: response.arrival?.cityName,
        price: response.price,
      }))
    }
    getFlightDetail()
  }, [flightId])

  const onBookFlight = async (contactInfo, onError) => {
    const user = LocalStorageUtils.getJWTUser()
    try {
      const payload = {
        accountId: user ? user.id : undefined,
        customer: {
          firstName: contactInfo.firstName,
          lastName: contactInfo.lastName,
          gender: contactInfo.gender,
          email: contactInfo.email,
          phoneNumber: contactInfo.phoneNumber,
        },
        flightId: flightId,
        seatCode: contactInfo.seatCode,
        price: flightDetail?.price + flightDetail?.price * 0.05,
      }
      const promiseResult = await bookingApis.bookFlight(payload)
      const response = promiseResult.data.data
      //       {
      //     "reservationCode": "mujP6X",
      //     "price": 1312500,
      //     "status": "Pending",
      //     "email": "huynhhuy2007@gmail.com",
      //     "customer": {
      //         "firstName": "Hiep",
      //         "lastName": "Cao",
      //         "gender": "Female",
      //         "email": "huynhhuy2007@gmail.com",
      //         "phoneNumber": "0903124567",
      //         "id": "bb33d2e3-ed70-4734-84df-f139641e5c96",
      //         "createdAt": "2023-03-17T14:37:02.450Z",
      //         "modifiedAt": "2023-03-17T14:37:02.450Z"
      //     },
      //     "invoice": {
      //         "status": "Pending",
      //         "account": {
      //             "id": "29b7d8f6-c11a-4f1a-b31a-b8115007362a",
      //             "email": "huynhhuy2002@gmail.com",
      //             "isActive": true,
      //             "image": "https://lh3.googleusercontent.com/a/AGNmyxYokgxGR84RFORsmCiAssam2GjHr5lhW_NRooD7Zg=s96-c",
      //             "googleId": "106690455902643272335",
      //             "role": "Customer"
      //         },
      //         "total": 1312500,
      //         "id": "70711c05-23fb-4bc3-9b71-9678712a2526",
      //         "createdAt": "2023-03-17T14:37:02.501Z",
      //         "modifiedAt": "2023-03-17T14:37:02.501Z"
      //     },
      //     "seat": {
      //         "code": "3B",
      //         "flight": {
      //             "id": "1ae439b7-5f8e-4470-b2d8-d91f20e809a9",
      //             "boardingGate": 8,
      //             "departTime": "2023-03-13T11:00:00.000Z",
      //             "arriveTime": "2023-03-13T13:15:00.000Z",
      //             "price": 1250000,
      //             "aircraft": {
      //                 "id": "6f1ef801-1b81-4149-85e5-aceb0ff18c46",
      //                 "code": "BOE788",
      //                 "name": "BOEING 787",
      //                 "numberOfSeats": 200
      //             },
      //             "departure": {
      //                 "id": "bf9397c0-fa42-4ed5-9e87-a40132a69505",
      //                 "code": "SGN",
      //                 "name": "Tan Son Nhat International Airport",
      //                 "cityName": "Ho Chi Minh City",
      //                 "numberOfGates": 20
      //             },
      //             "arrival": {
      //                 "id": "18664c70-0ca1-4d2a-b2b5-d6e43419279e",
      //                 "code": "HAN",
      //                 "name": "Noi Bai International Airport",
      //                 "cityName": "Ha Noi",
      //                 "numberOfGates": 15
      //             }
      //         },
      //         "id": "9c61c10b-ed40-40bb-9119-ea87af141770",
      //         "createdAt": "2023-03-17T14:37:02.489Z",
      //         "modifiedAt": "2023-03-17T14:37:02.489Z"
      //     },
      //     "flight": {
      //         "id": "1ae439b7-5f8e-4470-b2d8-d91f20e809a9",
      //         "boardingGate": 8,
      //         "departTime": "2023-03-13T11:00:00.000Z",
      //         "arriveTime": "2023-03-13T13:15:00.000Z",
      //         "price": 1250000,
      //         "aircraft": {
      //             "id": "6f1ef801-1b81-4149-85e5-aceb0ff18c46",
      //             "code": "BOE788",
      //             "name": "BOEING 787",
      //             "numberOfSeats": 200
      //         },
      //         "departure": {
      //             "id": "bf9397c0-fa42-4ed5-9e87-a40132a69505",
      //             "code": "SGN",
      //             "name": "Tan Son Nhat International Airport",
      //             "cityName": "Ho Chi Minh City",
      //             "numberOfGates": 20
      //         },
      //         "arrival": {
      //             "id": "18664c70-0ca1-4d2a-b2b5-d6e43419279e",
      //             "code": "HAN",
      //             "name": "Noi Bai International Airport",
      //             "cityName": "Ha Noi",
      //             "numberOfGates": 15
      //         }
      //     },
      //     "id": "02652728-35cc-40a9-8c0a-5441dda48a80",
      //     "createdAt": "2023-03-17T14:37:02.510Z",
      //     "modifiedAt": "2023-03-17T14:37:02.510Z"
      // }
      setShowModal(false)
      window.location.href = `/success?reservationCode=${response.reservationCode}&price=${response.price}`
      // setSuccessInfo({ reservationCode: response.reservationCode, price: response.price })
      // console.log(successInfo)
    } catch (e) {
      const response = e.response?.data
      if (response && (response.statusCode === 400 || response.statusCode === 401)) {
        onError(response.message)
      } else {
        console.log(e)
      }
    }
  }

  return (
    <Fragment>
      <Modal showModal={showModal} onClick={handleModalClick}>
        <ContactInfoModal
          cancelModal={handleModalClick}
          onClickBookFlight={onBookFlight}
          flightId={'1ae439b7-5f8e-4470-b2d8-d91f20e809a9'}
        />
      </Modal>
      <Navbar />
      <div className="grid grid-cols-12 w-4/5 mx-auto gap-6 my-24">
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
            <Button
              isWidthFull={true}
              content={'Book Fight'}
              onClick={() => {
                setShowModal(true)
              }}
            />
          </div>
        </div>
      </div>
      {/* {successInfo && successInfo.reservationCode && successInfo.price ? (
        <Navigate to={'/success'} state={successInfo} replace />
      ) : null} */}
    </Fragment>
  )
}

export default FlightDetail
