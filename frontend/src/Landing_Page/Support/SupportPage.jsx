import Footer from '../Footer.jsx';
import Navbar from '../Navbar.jsx';
import CreateTicket from './CreateTicket.jsx';
import Hero from './Hero.jsx';

export default function SupportPage(){
    return (
        <>
            <Navbar/>
            <Hero/>
            <CreateTicket/>
            <Footer/>
        </>
    )
}