import { FlightList, Navbar } from '../../components'

function ReservationList() {
  return (
    <div className="bg-surface h-screen">
      <Navbar />
      <h1 className="text-3xl font-semibold text-center my-8">Reservation</h1>
      <div className="w-4/5 mx-auto mb-4">
        <FlightList
          isFullWidth={true}
          buttonName={'Cancel flight'}
          iconName={'close-outline'}
          buttonName2={'Send to email'}
          iconName2={'mail-outline'}
        />
      </div>
    </div>
  )
}

export default ReservationList
