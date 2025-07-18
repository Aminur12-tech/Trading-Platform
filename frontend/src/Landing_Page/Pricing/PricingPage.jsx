import Footer from '../Footer.jsx';
import Navbar from '../Navbar.jsx';
import Brokerage from './Brokerage.jsx';
import Hero from './Hero.jsx';
import OpenAccount from '../OpenAccount.jsx'

export default function PricingPage(){
    return (
        <>
            <Navbar/>
            <Hero/>
            <OpenAccount/>
            <Brokerage/>
            <Footer/>
        </>
    )
}