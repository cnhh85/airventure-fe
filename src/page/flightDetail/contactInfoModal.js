import { useEffect, useState } from 'react'

import { InputField, Button, RadioButton } from '../../components'

import bookingApis from '../../utils/api/bookingApis'

function ContactInfoModal({ flightId = null, cancelModal, onClickBookFlight }) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [seatCode, setSeatCode] = useState('')
  const [email, setEmail] = useState('')
  const [gender, setGender] = useState('Male')
  const [errorMessage, setErrorMessage] = useState('')
  const [availableSeats, setAvailableSeats] = useState([])

  const onEmailChange = (event) => setEmail(event.target.value)
  const onFirstNameChange = (event) => setFirstName(event.target.value)
  const onLastNameChange = (event) => setLastName(event.target.value)
  const onPhoneNumberChange = (event) => setPhoneNumber(event.target.value)
  const onSeatCodeChange = (event) => setSeatCode(event.target.value)
  const onGenderChange = (event) => setGender(event.target.value)

  useEffect(() => {
    const getAvailableSeats = async () => {
      const promiseResult = await bookingApis.getAvailableSeat(flightId)
      const response = promiseResult.data.data
      setAvailableSeats([...response])
    }
    getAvailableSeats()
  }, [flightId])

  return (
    <div className="bg-white w-2/5 rounded-xl fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-16 px-14 ">
      <div className=" flex flex-col space-y-2 mb-12">
        <h2 className="text-2xl font-semibold text-slate-600">
          Ticket booking contact information
        </h2>
        <p className="text-base text-slate-500">
          Please fill in all the information, we will contact you when needed, Check your
          information carefully before submitting.
        </p>
      </div>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          setErrorMessage('')
          if (seatCode === 'Choose seat') {
            setErrorMessage('Please choose a seat')
          }
          onClickBookFlight(
            { firstName, lastName, phoneNumber, email, seatCode, gender },
            setErrorMessage
          )
        }}
      >
        <div className="flex flex-col w-auto">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-6">
              <InputField
                value={firstName}
                onChange={onFirstNameChange}
                label="First Name"
                name="firstname"
                iconName="person-outline"
              />
            </div>
            <div className="col-span-6">
              <InputField
                value={lastName}
                onChange={onLastNameChange}
                label="Last Name"
                name="lastname"
                iconName="person-outline"
              />
            </div>
          </div>
          <div className="flex gap-8">
            <div className="basis-2/3">
              <InputField
                value={email}
                onChange={onEmailChange}
                type="email"
                label="Email"
                name="email"
                iconName="mail-outline"
              />
            </div>
            <div className="w-full basis-1/3">
              <label className="mb-2 block text-base font-medium text-slate-600">Gender</label>
              <div className="flex justify-between items-center">
                <RadioButton
                  onChange={onGenderChange}
                  onClick={onGenderChange}
                  checked={gender}
                  value={'Male'}
                  id={'gender-male'}
                  name={'gender'}
                />
                <RadioButton
                  onChange={onGenderChange}
                  onClick={onGenderChange}
                  checked={gender}
                  value={'Female'}
                  id={'gender-female'}
                  name={'gender'}
                />
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="basis-1/2">
              <InputField
                value={phoneNumber}
                onChange={onPhoneNumberChange}
                label="Phone Number"
                type="text"
                iconName="call-outline"
              />
            </div>
            <div className="basis-1/2">
              <label htmlFor="seatCode" className="mb-3 block text-base font-medium text-slate-600">
                Seat
              </label>
              <select
                id="seatCode"
                onChange={onSeatCodeChange}
                value={seatCode}
                defaultValue=""
                className="w-full  rounded-md border border-[#e0e0e0] bg-white pt-2.5 pb-2 text-base px-4 text-base font-medium text-slate-500 outline-none focus:border-primary"
              >
                <option selected>Choose seat</option>
                {availableSeats && availableSeats.length > 0
                  ? availableSeats.map((seat) => (
                      <option key={seat} value={seat}>
                        {seat}
                      </option>
                    ))
                  : null}
              </select>
            </div>
          </div>
          {errorMessage ? <p className="text-red-500 my-4 text-center">{errorMessage}</p> : null}
        </div>
        <div className="flex flex-row justify-end mt-4">
          <Button content="Cancel" variant="transparent" onClick={cancelModal} />
          <Button type="submit" content="Book Flight" variant="primary" />
        </div>
      </form>
    </div>
  )
}

export default ContactInfoModal
