import React from 'react'

import ActionFlightList from './ActionFlightList'
import RouteFlightList from './RouteFlightList'
import TimeFlightList from './TimeFlightList'

function FlightLIst() {
  return (
    <div className="rounded-xl bg-white grid grid-cols-12 divide-x">
      <div className="col-span-8 my-10 mx-12">
        <h3 className="text-base text-slate-600 font-semibold mb-6">BL6012</h3>
        <div className="flex flex-row space-x-12">
          <TimeFlightList />
          <div className="flex-1">
            <RouteFlightList />
          </div>
          <TimeFlightList />
        </div>
      </div>
      <div className="col-span-4 ">
        <div className="flex justify-center my-10 mx-12">
          <ActionFlightList />
        </div>
      </div>
    </div>
  )
}

export default FlightLIst
