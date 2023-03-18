import React, { useState } from 'react'

import { LOCALSTORAGE_TOKEN_NAME } from '../../config'
import LocalStorageUtils from '../../utils/LocalStorageUtils'
import authApis from '../../utils/api/authApis'
import GoogleButton from './googleButton'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [errorMessage, setErrorMessage] = useState('')

  const onEmailChange = (event) => {
    setEmail(event.target.value)
  }
  const onPasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    try {
      setErrorMessage('')
      const promiseResult = await authApis.authenticate({ email, password })
      const response = promiseResult.data
      LocalStorageUtils.setItem(LOCALSTORAGE_TOKEN_NAME, response.data.accessToken)
      window.location.href = '/account-management'
    } catch (e) {
      const response = e.response.data
      if (response.statusCode === 401) {
        setErrorMessage(response.message)
      } else {
        console.log(response)
      }
    }
  }
  const onGoogleLogin = async () => {
    try {
      setErrorMessage('')
      window.location = 'http://localhost:3000/v1/api/auth/google'
      // const response = promiseResult.data
      // LocalStorageUtils.setItem(LOCALSTORAGE_TOKEN_NAME, response.data.accessToken)
      // window.location.href = '/account-management'
    } catch (e) {
      // const response = e.response.data
      // if (response.statusCode === 401) {
      //   setErrorMessage(response.message)
      // } else {
      //   console.log(response)
      // }
    }
  }

  return (
    <div className="w-[480px] h-fit mx-auto">
      <div className="top-50%">
        <div className="text-center">
          <h3 className="font-[500]] text-[32px] text-[#1A1C1E]">Welcome back to AirVenture</h3>
          <p className="font-[400] text-[16px] text-[#72787E] mt-4 mb-6">
            Login to AirVenture and unlock exclusive flight bookings.
          </p>
        </div>
        <GoogleButton />

        <div className="flex text-center items-center justify-center">
          <div className="w-1/3 border border-[#E0E0E0]"></div>
          <h5 className="mx-3">or</h5>
          <div className="w-1/3 border border-[#E0E0E0]"></div>
        </div>

        <form onSubmit={onSubmit}>
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

          {errorMessage ? <p className="text-red-500 mb-4 text-center">{errorMessage}</p> : null}

          <button
            type="submit"
            // onClick={onSubmit}
            className="text-white w-full py-auto bg-[#3898D3] hover:bg-[#3898D3]/80 outline-none font-medium rounded-lg text-sm py-2.5 text-center duration-100"
          >
            Login
          </button>
        </form>

        <div className="flex justify-center my-3 text-[14px]">
          <p className="mr-[4px]">Don&apos;t have account? </p>
          <a
            href="/register"
            className="text-[#3898D3] font-semibold hover:text-[#3898D3]/80 duration-100"
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
  )
}

export default Login
