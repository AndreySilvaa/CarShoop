// Routes
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// CSS
import './styles/app.sass'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Pages
import Home from './pages/home/Home'
import About from './pages/about/About'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
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
          <Route path='/register' element={<Register/>}/>
          <Route path='/brand/:brand' element={<Brand/>}/>
          <Route path='/car/:id' element={<Car/>}/>
        </Routes>

        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
