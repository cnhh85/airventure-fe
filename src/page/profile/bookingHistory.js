import { FlightList, Navbar } from '../../components'

function bookingHistory() {
  return (
    <div className="bg-surface h-screen">
      <Navbar />
      <h1 className="text-3xl font-semibold text-center my-8">Booking History</h1>
      {/* use grid 12 to create 2 part, one for filter account 1/4, list flight accounts 1/5 */}
      <div className="grid grid-cols-12 w-4/5 mx-auto gap-6">
        <div className="col-span-3 w-full bg-white rounded-xl ">Filter</div>
        <div className="col-span-9 ">
          <FlightList />
        </div>
      </div>
    </div>
  )
}

export default bookingHistory
