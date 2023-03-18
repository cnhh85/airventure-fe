import { Fragment, useEffect, useState } from 'react'

import { FlightItem, Navbar } from '../../components'

import { LOCALSTORAGE_TOKEN_NAME } from '../../config'
import { get, post } from '../../utils/ApiCaller'
import LocalStorageUtils from '../../utils/LocalStorageUtils'

// import ConfirmModal from './confirmModal'

function PendingReservation() {
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
  const [pendingFlights, setPendingFlights] = useState([])
  const buttonProps = [
    {
      buttonName: 'Reject',
      iconName: 'close-outline',
      variant: 'outline',
    },
    {
      buttonName: 'Verify',
      iconName: 'checkmark-outline',
      onClickButton: () => {},
      variant: 'primary',
    },
  ]

  const mapButtonProps = (invoiceId, buttonProps) => {
    const result = []
    const token = LocalStorageUtils.getToken()
    result[0] = {
      ...buttonProps[0],
      onClickButton: async () => {
        const promiseResult = await post(
          '/v1/api/invoices/reject-transaction',
          { invoiceId },
          {},
          { Authorization: `Bearer ${token}` }
        )
        console.log(promiseResult)
        window.location.reload()
      },
    }
    result[1] = {
      ...buttonProps[1],
      onClickButton: async () => {
        const promiseResult = await post(
          '/v1/api/invoices/verify-transaction',
          { invoiceId },
          {},
          { Authorization: `Bearer ${token}` }
        )
        console.log(promiseResult)
        window.location.reload()
      },
    }
    return result
  }

  useEffect(() => {
    const getAllPendingTickets = async () => {
      const token = LocalStorageUtils.getItem(LOCALSTORAGE_TOKEN_NAME)
      const promiseResult = await get(
        '/v1/api/tickets/pending-reservation',
        {},
        {},
        { Authorization: `Bearer ${token}` }
      )
      const response = promiseResult.data.data
      console.log(response)
      setPendingFlights([...response])
    }
    getAllPendingTickets()
  }, [])

  const [showModal, setShowModal] = useState(false)
  const handleModalClick = () => {
    setShowModal(false)
  }
  return (
    <Fragment>
      {/* <Modal showModal={showModal} onClick={handleModalClick}>
        <ConfirmModal cancelModal={handleModalClick} />
      </Modal> */}
      <Navbar />
      <h1 className="text-3xl font-semibold text-center my-8">Pending Reservation</h1>
      <div className="w-3/5 mx-auto mb-20 flex flex-col gap-6">
        {pendingFlights && pendingFlights.length > 0
          ? pendingFlights.map((flight) => (
              <FlightItem
                key={flight.id}
                price={flight.price}
                departureTime={flight.flight?.departTime}
                arrivalTime={flight.flight?.arriveTime}
                departureCode={flight.flight?.departure?.code}
                arrivalCode={flight.flight?.arrival?.code}
                reservationCode={flight.reservationCode}
                ticketStatus={flight.status}
                seatCode={flight.seat}
                isFullWidth={true}
                buttonProps={mapButtonProps(flight.invoice?.id, buttonProps)}
              />
            ))
          : null}
      </div>
    </Fragment>
  )
}

export default PendingReservation
