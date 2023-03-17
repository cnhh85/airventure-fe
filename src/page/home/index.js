import React from 'react'

import LocalStorageUtils from '../../utils/LocalStorageUtils'

export const Home = () => {
  const URL = window.location.search
  const urlParams = new URLSearchParams(URL)
  const token = urlParams.get('token')
  if (token) {
    LocalStorageUtils.setItem('token', token)
    window.location.href = '/'
  }

  return <div>Home</div>
}

export default Home
