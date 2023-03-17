import { calculateDuration } from '../../../utils/parser'
import RouteFlightItem from './routeFlightItem'
import TimeFlightItem from './timeFlightItem'

function InfoFlightItem({ departureTime, arrivalTime, departureCode, arrivalCode }) {
  return (
    <div>
      <h3 className="text-base text-slate-600 font-semibold mb-6">AirVenture</h3>
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
