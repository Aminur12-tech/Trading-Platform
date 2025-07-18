import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './Landing_Page/Home/HomePage'
import AboutPage from './Landing_Page/About/AboutPage'
import SignUpPage from './Landing_Page/SignUp/SignUpPage'
import PricingPage from './Landing_Page/Pricing/PricingPage'
import ProductPage from './Landing_Page/Products/ProductPage'
import SupportPage from './Landing_Page/Support/SupportPage'

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/about' element={<AboutPage/>}></Route>
        <Route path='/Signup' element={<SignUpPage/>}></Route>
        <Route path='/Pricing' element={<PricingPage/>}></Route>
        <Route path='/Product' element={<ProductPage/>}></Route>
        <Route path='/Support' element={<SupportPage/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
