import Awards from "./Awards";
import Hero from "./Hero";
import Education from "./Education";
import Pricing from "./Pricing";
import Stats from "./Stats";
import Navbar from "../Navbar";
import Footer from "../Footer";
import OpenAccount from "../OpenAccount";
import '../Home/Homepage.css';

export default function Homepage() {
    return (

        <>
            <Navbar/>
            <Hero/>
            <Awards/>
            <Stats/>
            <Pricing/>
            <Education/>
            <OpenAccount/>
            <Footer/>
        </>
    )
}