import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from '../pages/Signup' 
import './App.css'

function App() {
  return (<>
      <BrowserRouter>
      <Routes>
        <Route path='/singup' element={<Signup/>}/>
        <Route path='/login'/>
        <Route path='/products'/>
        <Route path='/cart'/>
      </Routes>
      </BrowserRouter>
  </>
  );
}

export default App  