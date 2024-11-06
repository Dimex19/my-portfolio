import '../src/App.css'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPage from './Pages/LandingPage'

const App = ()=> {
  return (
    <div className='MainContainer'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>} />

        </Routes>
      </BrowserRouter>
      
      
    </div>
  )
}
export default App