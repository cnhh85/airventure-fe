import { calculateDuration } from '../../../utils/parser'
import RouteFlightItem from './routeFlightItem'
import TimeFlightItem from './timeFlightItem'

function InfoFlightItem({
  seatCode,
  reservationCode,
  departureTime,
  arrivalTime,
  departureCode,
  arrivalCode,
}) {
  return (
    <div>
      <div className="flex justify-between">
        <h3 className="text-lg text-slate-600 font-semibold mb-6">
          {reservationCode ? `Reservation Code: ${reservationCode}` : 'AirVenture'}
        </h3>
        <h3 className="text-lg text-slate-600 font-semibold mb-6">
          {seatCode ? `Seat Code: ${seatCode}` : 'AirVenture'}
        </h3>
      </div>
      <div className="flex flex-row space-x-12">
        <TimeFlightItem time={departureTime} locationCode={departureCode} />
        <div className="flex-1">
          <RouteFlightItem
            date={departureTime}
            duration={
              departureTime && arrivalTime
                ? calculateDuration(departureTime, arrivalTime)
                : 'Unknown'
            }
          />
        </div>
        <TimeFlightItem time={arrivalTime} locationCode={arrivalCode} />
      </div>
    </div>
  )
}

export default InfoFlightItem
