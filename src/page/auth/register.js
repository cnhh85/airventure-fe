import React from 'react'

const Register = () => {
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
        <div className="flex text-center items-center justify-center">
          <div className="w-1/3 border border-[#E0E0E0]"></div>
          <h5 className="mx-3">or</h5>
          <div className="w-1/3 border border-[#E0E0E0]"></div>
        </div>

        <form>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">
              Email
            </label>
            <input
              type="email"
              id="email"
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
              className="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white : :"
              placeholder="Input your confirm password"
              required
            />
          </div>
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
