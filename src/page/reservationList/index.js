import { Fragment, useState } from 'react'

import { FlightItem, Navbar, Modal } from '../../components'

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
  const buttonProps = [
    {
      buttonName: 'View Detail',
      iconName: 'eye-outline',
      onClickButton: () => {},
      variant: 'outline',
    },
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
  const [showModal, setShowModal] = useState(false)
  const handleModalClick = () => {
    setShowModal(false)
  }
  return (
    <Fragment>
      <Modal showModal={showModal} onClick={handleModalClick}>
        <ConfirmModal cancelModal={handleModalClick} />
      </Modal>
      <Navbar />
      <h1 className="text-3xl font-semibold text-center my-8">My Reservation</h1>
      <div className="w-4/5 mx-auto mb-4">
        <FlightItem
          price={flightDetail.price}
          departureTime={flightDetail.departureTime}
          arrivalTime={flightDetail.arrivalTime}
          departureCode={flightDetail.departureCode}
          arrivalCode={flightDetail.arrivalCode}
          isFullWidth={true}
          buttonProps={buttonProps}
        />
      </div>
    </Fragment>
  )
}

export default ReservationList
