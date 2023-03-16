import { FlightList, Navbar } from '../../../components'

function BookingHistory() {
  return (
    <div className="bg-surface h-screen">
      <Navbar />
      <h1 className="text-3xl font-semibold text-center my-8">Booking History</h1>
      <div className="grid grid-cols-12 w-4/5 mx-auto gap-6">
        <div className="col-span-3 w-full bg-white rounded-xl ">Filter</div>
        <div className="col-span-9 ">
          <FlightList isFullWidth={false} buttonName={'View Detail'} iconName={'eye-outline'} />
        </div>
      </div>
    </div>
  )
}

export default BookingHistory
