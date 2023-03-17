import { Fragment, useState } from 'react'

import { FlightItem, Navbar, Modal } from '../../components'

import { post } from '../../utils/ApiCaller'
import LocalStorageUtils from '../../utils/LocalStorageUtils'
import ConfirmModal from './confirmModal'

function ReservationList() {
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
  const [reservationCode, setReservationCode] = useState('')
  const [reservation, setReservation] = useState(null)
  const buttonProps = [
    {
      buttonName: 'Cancel flight',
      iconName: 'close-outline',
      onClickButton: () => {
        setShowModal(true)
      },
      variant: 'outline',
    },
    {
      buttonName: 'Send to email',
      iconName: 'mail-outline',
      onClickButton: () => {},
      variant: 'primary',
    },
  ]
  const mapButtonProps = (reservation, buttonProps) => {
    if (!reservation) {
      return buttonProps
    } else {
      const result = []
      const token = LocalStorageUtils.getToken()
      if (reservation.status === 'Cancelled') {
        return []
      } else if (reservation.status === 'Pending') {
        result.push({
          ...buttonProps[0],
          onClickButton: async () => {
            const promiseResult = await post(
              '/v1/api/tickets/cancel',
              { reservationCode: reservation.reservationCode },
              {},
              { Authorization: `Bearer ${token}` }
            )
            const ticketPromiseResult = await post(
              '/v1/api/tickets/retrieve',
              { reservationCode: reservation.reservationCode },
              {},
              { Authorization: `Bearer ${token}` }
            )
            const response = ticketPromiseResult.data.data
            setReservation(response)
          },
        })
      } else if (reservation.status === 'Issued') {
        result.push({
          ...buttonProps[1],
          onClickButton: async () => {
            const promiseResult = await post(
              '/v1/api/tickets/send-email',
              {
                reservationCode: reservation.reservationCode,
                email: reservation.customer?.email,
              },
              {},
              { Authorization: `Bearer ${token}` }
            )
          },
        })
      }
      return result
    }
  }

  const [showModal, setShowModal] = useState(false)
  const handleModalClick = () => {
    setShowModal(false)
  }

  const onReservationCodeChange = (event) => {
    setReservationCode(event.target.value)
  }
  const onSearch = async (event) => {
    event.preventDefault()
    const token = LocalStorageUtils.getToken()
    try {
      const promiseResult = await post(
        '/v1/api/tickets/retrieve',
        { reservationCode: reservationCode },
        {},
        { Authorization: `Bearer ${token}` }
      )
      const response = promiseResult.data.data
      setReservation(response)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Fragment>
      <Modal showModal={showModal} onClick={handleModalClick}>
        <ConfirmModal cancelModal={handleModalClick} />
      </Modal>
      <Navbar />
      <h1 className="text-3xl font-semibold text-center my-8">Manage Reservation</h1>
      <form className="w-1/3 mx-auto mb-10" onSubmit={onSearch}>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            value={reservationCode}
            onChange={onReservationCodeChange}
            className="block w-full p-4 pl-10 text-lg text-gray-900 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="Reservation Code Here"
            required
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-primary hover:bg-primaryHover focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-4 py-2"
          >
            Search
          </button>
        </div>
      </form>
      <div className="w-4/5 mx-auto mb-4">
        {reservation ? (
          <FlightItem
            price={reservation.price}
            departureTime={reservation.flight?.departTime}
            arrivalTime={reservation.flight?.arriveTime}
            departureCode={reservation.flight?.departure?.code}
            arrivalCode={reservation.flight?.arrival?.code}
            seatCode={reservation.seat}
            reservationCode={reservation.reservationCode}
            ticketStatus={reservation.status}
            isFullWidth={true}
            buttonProps={mapButtonProps(reservation, buttonProps)}
          />
        ) : null}
      </div>
      {reservation ? (
        <div className="w-4/5 mx-auto p-10 bg-white rounded-lg">
          <p className="py-2 text-lg text-slate-600">
            <strong>First Name:</strong> {reservation.customer?.firstName}
          </p>
          <p className="py-2 text-lg text-slate-600">
            <strong>Last Name:</strong> {reservation.customer?.lastName}
          </p>
          <p className="py-2 text-lg text-slate-600">
            <strong>Gender:</strong> {reservation.customer?.gender}
          </p>
          <p className="py-2 text-lg text-slate-600">
            <strong>Email:</strong> {reservation.customer?.email}
          </p>
          <p className="py-2 text-lg text-slate-600">
            <strong>Phone Number:</strong> {reservation.customer?.phoneNumber}
          </p>
        </div>
      ) : null}
    </Fragment>
  )
}

export default ReservationList
