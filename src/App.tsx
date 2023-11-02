// Routes
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth' // Funcionalidade que retorna se o usuário está autenticado ou não

// Hooks
import { useState, useEffect } from 'react'

// CSS
import './styles/app.sass'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Pages
import Home from './pages/home/Home'
import About from './pages/about/About'
import Login from './pages/login/Login'
import Brand from './pages/brand/Brand'
import Car from './pages/car/Car'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/brand/:brand' element={<Brand/>}/>
          <Route path='/car/:id' element={<Car/>}/>
        </Routes>

        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
