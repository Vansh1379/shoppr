import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'

function App() {
  return (<>
      <BrowserRouter>
      <Routes>
        <Route path='/singup' element={}/>
        <Route path='/login'/>
        <Route path='/products'/>
        <Route path='/cart'/>
      </Routes>
      </BrowserRouter>
  </>
  );
}

export default App  