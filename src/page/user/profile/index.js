import { Fragment, useEffect, useState } from 'react'

import { Navbar, InputField, Button } from '../../../components'

import { LOCALSTORAGE_TOKEN_NAME } from '../../../config'
import { get, put } from '../../../utils/ApiCaller'
import LocalStorageUtils from '../../../utils/LocalStorageUtils'

export const Profile = () => {
  const [userInfo, setUserInfo] = useState({})
  const [image, setImage] = useState(null)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [gender, setGender] = useState('Male')
  const [errorMessage, setErrorMessage] = useState('')

  const onEmailChange = (event) => setEmail(event.target.value)
  const onFirstNameChange = (event) => setFirstName(event.target.value)
  const onLastNameChange = (event) => setLastName(event.target.value)
  const onPhoneNumberChange = (event) => setPhoneNumber(event.target.value)
  const onGenderChange = (event) => setGender(event.target.value)

  useEffect(() => {
    const jwtUser = LocalStorageUtils.getJWTUser()
    const token = LocalStorageUtils.getToken()
    const getUserInfo = async () => {
      const promiseResult = await get(
        `/v1/api/customers/get-by-account/${jwtUser.id}`,
        {},
        {},
        { Authorization: `Bearer ${token}` }
      )
      const user = promiseResult.data.data
      setUserInfo({ customerId: user.id, firstName: user.firstName, lastName: user.lastName })
      setImage(user.account?.image)
      setFirstName(user.firstName)
      setEmail(user.account?.email)
      setGender(user.gender)
      setLastName(user.lastName)
      setPhoneNumber(user.phoneNumber)
    }
    getUserInfo()
  }, [])

  const onSaveChange = async (event) => {
    event.preventDefault()
    if (
      firstName === userInfo.firstName &&
      lastName === userInfo.lastName &&
      gender === userInfo.gender &&
      phoneNumber === userInfo.phoneNumber
    ) {
      console.log('Nah bro')
    } else {
      const promiseResult = await put(
        `/v1/api/customers/update/${userInfo.customerId}`,
        { firstName, lastName, gender, phoneNumber },
        {},
        { Authorization: `Bearer ${LocalStorageUtils.getItem(LOCALSTORAGE_TOKEN_NAME)}` }
      )
      console.log(promiseResult)
      if (promiseResult.data.statusCode === 200) {
        window.location.reload()
      }
    }
  }

  return (
    <Fragment>
      <Navbar />
      <div className="container my-10 rounded-xl bg-white w-[766px] m-auto p-16 ">
        <div className="flex flex-col w-3/4">
          <h2 className="text-2xl font-semibold leading-7 text-gray-900 sm:truncate sm:tracking-tight">
            User account settings
          </h2>
          <p className="mt-4 text-base text-gray-500">
            Update and manage your personal information for a better experience in connecting with
            AirVenture.
          </p>
        </div>
        <form onSubmit={onSaveChange}>
          <div className="flex flex-row my-8 space-x-16">
            <div className="flex flex-col w-4/6">
              {/* <InputField label="Avatar" name="avatar" iconName="camera-outline" /> */}
              <div className="flex flex-row space-x-4">
                <InputField
                  required
                  value={firstName}
                  onChange={onFirstNameChange}
                  label="First Name"
                  name="username"
                  iconName="person-outline"
                />
                <InputField
                  required
                  value={lastName}
                  onChange={onLastNameChange}
                  label="Last Name"
                  name="name"
                  iconName="person-outline"
                />
              </div>
              <div className="flex gap-4">
                <div>
                  <InputField
                    value={email}
                    label="Email"
                    readOnly={true}
                    name="email"
                    iconName="mail-outline"
                  />
                </div>
                <div className="w-full basis-1/3">
                  <label className="mb-2 block text-base font-medium text-[#07074D]">Gender</label>
                  <div className="basis-1/2 flex justify-between items-center">
                    <div className="flex items-center">
                      <input
                        id="gender-male"
                        type="radio"
                        value="Male"
                        name="gender"
                        onClick={onGenderChange}
                        onChange={onGenderChange}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                        checked={gender === 'Male'}
                      />
                      <label
                        htmlFor="gender-male"
                        className="w-full py-4 ml-2 text-sm font-medium text-gray-900"
                      >
                        Male
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="gender-female"
                        type="radio"
                        value="Female"
                        name="gender"
                        onClick={onGenderChange}
                        onChange={onGenderChange}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                        checked={gender === 'Female'}
                      />
                      <label
                        htmlFor="gender-female"
                        className="w-full py-4 ml-2 text-sm font-medium text-gray-900"
                      >
                        Female
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <InputField
                value={phoneNumber}
                onChange={onPhoneNumberChange}
                label="Phone"
                required
                type="text"
                iconName="call-outline"
              />
            </div>
            <img
              src={
                image
                  ? image
                  : `https://avatar.oxro.io/avatar.svg?name=${[
                      userInfo.firstName,
                      userInfo.lastName,
                    ].join('+')}&caps=3&bold=true`
              }
              className="h-28 w-28 m-2 rounded-full object-cover"
              alt="Profile"
            />
          </div>
          <div className="flex flex-row">
            <Button type="" content="Save Change" variant="primary" />
            <Button content="Cancel" variant="transparent" />
          </div>
        </form>
      </div>
    </Fragment>
  )
}
export default Profile
