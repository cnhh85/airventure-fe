import React from 'react'

import { Navbar } from '../../components'

function FlightDetail() {
  return (
    <div className="bg-surface h-screen">
      <Navbar />
      <div className="grid grid-cols-12 w-4/5 mx-auto gap-6">
        <div className="col-span-7 w-full bg-white rounded-xl ">Filter</div>
        <div className="col-span-5 w-full bg-white rounded-xl ">Filter</div>
      </div>
    </div>
  )
}

export default FlightDetail
