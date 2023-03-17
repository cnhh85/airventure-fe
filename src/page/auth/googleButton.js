import React from 'react'

// import AuthApis from '../../utils/api/authApis'

// import { useGoogleLogin } from '@react-oauth/google'

const GoogleButton = () => {
  //   const login = useGoogleLogin({
  //     onSuccess: (codeResponse) => console.log(codeResponse),
  //     onError: (error) => console.log(error),
  //     flow: 'auth-code',
  //   })
  const login = () => {
    window.location.href = 'http://localhost:3000/v1/api/auth/google'
  }
  return (
    <div
      type="button"
      onClick={() => login()}
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
    </div>
  )
}
export default GoogleButton
