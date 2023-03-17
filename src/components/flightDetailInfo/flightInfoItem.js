import { formatTime, formatDate } from '../../utils/parser'

function FlightInfoItem({ code, name, label, time = null, city }) {
  return (
    <div className="flex flex-row mx-auto w-full">
      <div
        style={{ borderBottomWidth: '96px', borderLeftWidth: '2px' }}
        className="ml-5 mr-8 border-gray-300"
      ></div>
      <div className="flex flex-col space-y-1">
        <div className="uppercase text-sm font-semibold mb-2 text-primary">{label}</div>
        <div className="font-semibold text-slate-600">
          {formatTime(time)}
          <span className="font-normal"> - {formatDate(time)}</span>
        </div>
        <div className=" text-slate-700 font-normal">
          {name} ({code})
        </div>
        <div className=" text-slate-700 font-normal">{city}</div>
      </div>
    </div>
  )
}

export default FlightInfoItem
