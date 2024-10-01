import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<></>} />
          <Route path='/home' element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
