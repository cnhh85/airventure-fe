import React, { useState } from 'react'

import authApis from '../../utils/api/authApis'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [gender, setGender] = useState('Male')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [message, setMessage] = useState('')

  const onEmailChange = (event) => setEmail(event.target.value)
  const onPasswordChange = (event) => setPassword(event.target.value)
  const onConfirmPasswordChange = (event) => setConfirmPassword(event.target.value)
  const onFirstNameChange = (event) => setFirstName(event.target.value)
  const onLastNameChange = (event) => setLastName(event.target.value)
  const onGenderChange = (event) => setGender(event.target.value)
  const onPhoneNumberChange = (event) => setPhoneNumber(event.target.value)

  const onSubmit = async (event) => {
    event.preventDefault()
    try {
      setErrorMessage(null)
      if (password !== confirmPassword) {
        setErrorMessage('Passwords do not match')
      } else {
        const promiseResult = await authApis.register({
          firstName,
          lastName,
          gender,
          phoneNumber,
          password,
          email,
        })
        const response = promiseResult.data
        if (response.statusCode === 201) {
          setMessage('Successfully registered!')
        }
      }
    } catch (e) {
      const response = e.response.data
      if (response.statusCode === 401 || response.statusCode === 400) {
        setErrorMessage(response.message)
      }
    }
  }

  return (
    <div className="w-[480px] h-fit mx-auto">
      <div className="top-50%">
        <div className="text-center">
          <h3 className="font-[500]] text-[32px] text-[#1A1C1E]">Welcome to AirVenture</h3>
          <p className="font-[400] text-[16px] text-[#72787E] mt-4 mb-6">
            Register with AirVenture to discover exclusive flight deals, personalized travel
            recommendations.
          </p>
        </div>

        <a
          type="button"
          className="cursor-pointer text-[#1A1C1E] w-full border border-solid border-1 border-[#E0E0E0] hover:bg-[#f0f1f0] font-medium rounded-lg text-sm py-2.5 text-center flex items-center mx-auto my-4 duration-100"
        >
          <div className="mx-auto flex items-center">
            <svg
              className="w-4 h-4 mr-2 -ml-1"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
            >
              <path
                fill="currentColor"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              ></path>
            </svg>
            Login with Google
          </div>
        </a>
        <div className="flex text-center items-center justify-center my-4">
          <div className="w-1/3 border border-[#E0E0E0]"></div>
          <h5 className="mx-3">or</h5>
          <div className="w-1/3 border border-[#E0E0E0]"></div>
        </div>

        <form onSubmit={onSubmit}>
          <div className="mb-6 flex justify-between gap-4">
            <div className="basis-1/2">
              <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 ">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={onFirstNameChange}
                className="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white : :"
                placeholder="First Name"
                required
              />
            </div>
            <div className="basis-1/2">
              <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 ">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={onLastNameChange}
                className="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white : :"
                placeholder="Last Name"
                required
              />
            </div>
          </div>
          <div className="mb-6 flex justify-between gap-4">
            <div className="basis-3/4">
              <label
                htmlFor="phoneNumber"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                value={phoneNumber}
                onChange={onPhoneNumberChange}
                className="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white : :"
                placeholder="Phone Number"
                required
              />
            </div>
            <div className="basis-1/3">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">Gender</label>
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
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={onEmailChange}
              className="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white : :"
              placeholder="Input your email"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 :text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={onPasswordChange}
              className="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white : :"
              placeholder="Input your password"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="block mb-2 text-sm font-medium text-gray-900 :text-white"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={onConfirmPasswordChange}
              className="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white : :"
              placeholder="Input your confirm password"
              required
            />
          </div>
          {errorMessage ? <p className="text-red-500 mb-4 text-center">{errorMessage}</p> : null}
          {message ? <p className="text-blue-500 mb-4 text-center">{message}</p> : null}
          <button
            type="submit"
            className="text-white w-full py-auto bg-[#3898D3] hover:bg-[#3898D3]/80 outline-none font-medium rounded-lg text-sm py-2.5 text-center duration-100"
          >
            Register
          </button>
        </form>

        <div className="flex justify-center my-3 text-[14px]">
          <p className="mr-[4px]">If you already have account, </p>
          <a
            href="/login"
            className="text-[#3898D3] font-semibold hover:text-[#3898D3]/80 duration-100"
          >
            Sign in
          </a>
        </div>
      </div>
    </div>
  )
}

export default Register
