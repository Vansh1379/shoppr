import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import './App.css'
import { Signup } from './pages/Signup'
import { Login } from './pages/Login'
import { Product } from './pages/Product'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<LandingPage />} />
          <Route path='product' element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
