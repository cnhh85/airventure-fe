import { BrowserRouter } from 'react-router-dom'

import { GOOGLE_CLIENT_ID } from './config'
import Switch from './routes'

import { GoogleOAuthProvider } from '@react-oauth/google'

const App = () => {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <BrowserRouter>
        <Switch />
      </BrowserRouter>
    </GoogleOAuthProvider>
  )
}

export default App
