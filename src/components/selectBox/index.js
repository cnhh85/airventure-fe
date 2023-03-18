import { useState } from 'react'

import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

function SelectBox({ placeHolder, label, selection, type, value }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)
  const [showCalendar, setShowCalendar] = useState(false)
  const [selectedDate, setSelectedDate] = useState(null)
  const disablePastDates = (date) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0) // reset time to midnight
    return date.getTime() >= today.getTime()
  }

  const toggleSelect = () => {
    setIsOpen(!isOpen)
  }
  const toggleCalendar = () => {
    setShowCalendar(!showCalendar)
  }

  const handleSelect = (option) => {
    setSelectedOption(option)
    value()
  }

  const handleDateChange = (date) => {
    setSelectedDate(date)
    setSelectedOption(date.toLocaleDateString('en-GB'))
    value(date.toLocaleDateString('en-GB'))
  }

  if (type !== 'date') {
    return (
      <div className="flex rounded-xl bg-surface w-[300px] hover:bg-gray-100 hover:outline-gray-200 hover:outline">
        <button
          className="px-5 pt-4 cursor-pointer text-left relative w-full"
          onClick={() => toggleSelect(null)}
        >
          <h5 className="text-slate-500 text-sm font-semibold">{label}</h5>
          <div className="inline-block text-left w-full">
            <div
              className="inline-flex w-full justify-between gap-x-5 rounded-md bg-surface py-3 font-regular text-slate-700"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
            >
              <div className="mr-auto truncate max-w-[80%]">
                {selectedOption
                  ? selectedOption.cityName + ' (' + selectedOption.code + ')'
                  : placeHolder}
              </div>
              <span className="mt-1 text-slate-500">
                {isOpen ? (
                  <ion-icon size="small" name="chevron-up-outline"></ion-icon>
                ) : (
                  <ion-icon size="small" name="chevron-down-outline"></ion-icon>
                )}
              </span>
            </div>
          </div>
          <div
            className={`absolute right-0 mt-2 w-full origin-top-right shadow-custom rounded-xl border border-slate-200 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${
              isOpen ? 'block' : 'hidden'
            }`}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex="-1"
          >
            {selection.map((item) => (
              <div className="py-1" role="none" key={item.id}>
                <div className="py-1" role="none">
                  <div
                    className={`text-gray-700 z-10 block px-4 py-2 text-sm hover:bg-surface `}
                    role="menuitem"
                    tabIndex="-1"
                    id={`menu-item-${item.id}`}
                    onClick={() => handleSelect(item)}
                  >
                    {item.cityName}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </button>
      </div>
    )
  } else {
    return (
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        showPopperArrow={false}
        open={showCalendar}
        minDate={new Date()}
        filterDate={disablePastDates}
        customInput={
          <div className="flex rounded-xl bg-surface hover:bg-gray-100 hover:outline-gray-200 hover:outline">
            <button
              className="px-5 pt-4 cursor-pointer text-left relative w-full"
              onClick={toggleCalendar}
            >
              <h5 className="text-slate-500 text-sm font-semibold">{label}</h5>
              <div className="inline-block text-left w-full">
                <div
                  className="inline-flex w-full justify-between gap-x-5 rounded-md bg-surface py-3 font-regular text-slate-700"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  <div className="mr-auto">{selectedOption ? selectedOption : placeHolder}</div>
                  <span className="mt-1 text-slate-500">
                    {isOpen ? (
                      <ion-icon size="small" name="chevron-up-outline"></ion-icon>
                    ) : (
                      <ion-icon size="small" name="chevron-down-outline"></ion-icon>
                    )}
                  </span>
                </div>
              </div>
            </button>
          </div>
        }
        calendarClassName="border-slate-200 bg-white shadow-custom rounded-xl"
      />
    )
  }
}

export default SelectBox
