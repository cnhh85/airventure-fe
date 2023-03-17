function FlightInfoItemExtra({ info, extraInfo = null, iconName = null }) {
  return (
    <div className="flex flex-row m-auto w-full space-x-4">
      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300">
        <ion-icon style={{ fontSize: '20px', color: '#3898D3' }} name={iconName} />
      </div>
      <div className="font-medium text-slate-400 m-auto ">
        <div className="font-semibold text-slate-600">
          {info}
          {extraInfo && <span className="font-normal text-slate-500"> ({extraInfo})</span>}
        </div>
      </div>
    </div>
  )
}

export default FlightInfoItemExtra
