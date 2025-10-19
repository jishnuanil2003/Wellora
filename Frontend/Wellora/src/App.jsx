import React from 'react'
import Home from './Pages/Home'
import { Routes,Route,BrowserRouter} from "react-router" 
import Login from './Pages/Login'
import Register from './Pages/Register'
import AppointmentForm from './Pages/AppointmentForm'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/booking' element={<AppointmentForm/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
