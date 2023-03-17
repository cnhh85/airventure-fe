import React from 'react'

import ActionFlightItem from './actionFlightItem'
import InfoFlightItem from './infoFlightItem'

function FlightItem({
  price = 0,
  departureTime = null,
  arrivalTime = null,
  departureCode = 'unknown',
  arrivalCode = 'unknown',
  isFullWidth = false,
  buttonProps = [],
}) {
  return (
    <div className="rounded-xl bg-white grid grid-cols-12 divide-x h-64">
      <div className={`my-auto h-full ${isFullWidth ? 'col-span-7' : 'col-span-8'} py-10 px-12`}>
        <InfoFlightItem
          departureTime={departureTime}
          arrivalTime={arrivalTime}
          departureCode={departureCode}
          arrivalCode={arrivalCode}
        />
      </div>
      <div className={`${isFullWidth ? 'col-span-5' : 'col-span-4'} flex py-10 px-12`}>
        <ActionFlightItem price={price} isFullWidth={isFullWidth} buttonProps={buttonProps} />
      </div>
    </div>
  )
}

export default FlightItem
