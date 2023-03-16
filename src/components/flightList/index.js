import React from 'react'

import { calculateDuration } from '../../utils/parser'
import ActionFlightList from './ActionFlightList'
import RouteFlightList from './RouteFlightList'
import TimeFlightList from './TimeFlightList'

function FlightList({
  flightCode = 'AirVenture',
  price = 0,
  departureTime = null,
  arrivalTime = null,
  locationCode = 'unknown',
  isFullWidth = false,
  buttonName,
  onClickButton,
  buttonName2,
  onClickButton2,
  iconName,
  iconName2,
}) {
  return (
    <div className="rounded-xl bg-white grid grid-cols-12 divide-x h-64">
      <div className={`my-auto ${isFullWidth ? 'col-span-7' : 'col-span-8'} py-10 px-12`}>
        <h3 className="text-base text-slate-600 font-semibold mb-6">{flightCode}</h3>
        <div className="flex flex-row space-x-12">
          <TimeFlightList time={departureTime} locationCode={locationCode} />
          <div className="flex-1">
            <RouteFlightList
              date={departureTime}
              duration={
                departureTime && arrivalTime
                  ? calculateDuration(departureTime, arrivalTime)
                  : 'Unknown'
              }
            />
          </div>
          <TimeFlightList time={arrivalTime} locationCode={locationCode} />
        </div>
      </div>
      <div className={`${isFullWidth ? 'col-span-5' : 'col-span-4'} flex py-10 px-12`}>
        <ActionFlightList
          price={price}
          isFullWidth={isFullWidth}
          buttonName={buttonName}
          iconName={iconName}
          buttonName2={buttonName2}
          iconName2={iconName2}
          onClickButton={onClickButton}
          onClickButton2={onClickButton2}
        />
      </div>
    </div>
  )
}

export default FlightList
