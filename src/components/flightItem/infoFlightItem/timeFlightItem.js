import React from 'react'

import { formatTime, getDayOfWeek } from '../../../utils/parser'

function TimeFlightItem({ time = null, locationCode = 'unknown' }) {
  return (
    <div className="flex flex-col space-y-4">
      <h4 className="font-semibold text-slate-400">{getDayOfWeek(time)}</h4>
      <h2 className="text-2xl text-slate-600 font-semibold">{formatTime(time)}</h2>
      <h4 className="font-medium text-slate-500">{locationCode}</h4>
    </div>
  )
}

export default TimeFlightItem
