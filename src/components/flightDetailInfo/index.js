import { calculateDuration, formatNumberWithCommas } from '../../utils/parser'
import FlightInfoItem from './flightInfoItem'
import FlightInfoItemExtra from './flightInfoItemExtra'

function FlightDetailInfo({
  price = 0,
  aircraftCode = 'unknown',
  aircraftName = 'unknown',
  departureTime = null,
  arrivalTime = null,
  departureCode = 'unknown',
  arrivalCode = 'unknown',
  departureName = 'unknown',
  arrivalName = 'unknown',
  departureCityName = 'unknown',
  arrivalCityName = 'unknown',
}) {
  return (
    <div className="flex flex-col gap-6 mt-10">
      <FlightInfoItemExtra
        info={aircraftCode}
        extraInfo={aircraftName}
        iconName={'airplane-outline'}
      />
      <FlightInfoItem
        code={departureCode}
        name={departureName}
        label={'departure'}
        time={departureTime}
        city={departureCityName}
      />
      <FlightInfoItemExtra
        iconName={'timer-outline'}
        info={calculateDuration(departureTime, arrivalTime)}
      />

      <FlightInfoItem
        code={arrivalCode}
        name={arrivalName}
        label={'arrival'}
        time={arrivalTime}
        city={arrivalCityName}
      />
      <FlightInfoItemExtra
        iconName={'cash-outline'}
        info={formatNumberWithCommas(price)}
        extraInfo={'VNĐ'}
      />
    </div>
  )
}

export default FlightDetailInfo
