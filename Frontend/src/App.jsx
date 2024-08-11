import './App.css'
import { Route, Routes } from 'react-router-dom'
import Email from './components/Email'
import Otp from './components/Otp'
import Home from './components/Home'

function App() {
  
  return (
    <>
    <Routes>
    <Route path='/' element={<Email/>}></Route>
    <Route path='/ot' element={<Otp/>}></Route>
    <Route path='/home' element={<Home/>}></Route>
    </Routes>
    </>
  )
}

export default App
