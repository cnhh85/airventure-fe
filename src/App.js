import { BrowserRouter } from 'react-router-dom'

import Switch from './routes'

const App = () => {
  return (
    <BrowserRouter>
      <Switch />
    </BrowserRouter>
  )
}

export default App
