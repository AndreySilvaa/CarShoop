// Routes
import {HashRouter, Routes, Route} from 'react-router-dom'

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
      <HashRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/brand/:brand' element={<Brand/>}/>
          <Route path='/car/:id' element={<Car/>}/>
        </Routes>

        <Footer/>
      </HashRouter>
    </>
  )
}

export default App
