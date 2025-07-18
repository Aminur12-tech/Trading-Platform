import Navbar from '../Navbar.jsx';
import Footer from '../Footer.jsx';
import Hero from './Hero.jsx';
import Left from './Left.jsx';
import Right from './Right.jsx';
import Universe from './Universe.jsx';

// Assets
import kite from '../assets/kite.png';
import console from '../assets/console.png';
import coin from '../assets/coin.png';
import kiteconnect from '../assets/kiteconnect.png';
import varsity from '../assets/varsity.png';

export default function ProductPage() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />

                <Left 
                    imageURL={kite} 
                    productName="Kite" 
                    productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." 
                    tryDemo="https://kite.zerodha.com/demo" 
                    learnMore="https://kite.zerodha.com" 
                    googleplay="https://play.google.com/store/apps/details?id=com.zerodhakite" 
                    appstore="https://apps.apple.com/in/app/kite-by-zerodha/id1168576847" 
                />

                <Right 
                    imageURL={console}
                    productName="Console"
                    productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
                />

                <Left 
                    imageURL={coin} 
                    productName="Coin" 
                    productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." 
                    tryDemo="https://coin.zerodha.com/demo" 
                    learnMore="https://coin.zerodha.com" 
                    googleplay="https://play.google.com/store/apps/details?id=com.zerodha.coin" 
                    appstore="https://apps.apple.com/in/app/coin-by-zerodha/id1445793680" 
                />

                <Right 
                    imageURL={kiteconnect}
                    productName="Kite Connect API"
                    productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
                />

                <Left 
                    imageURL={varsity} 
                    productName="Varsity mobile" 
                    productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." 
                    tryDemo="https://zerodha.com/varsity" 
                    learnMore="https://zerodha.com/varsity" 
                    googleplay="https://play.google.com/store/apps/details?id=com.zerodha.varsity" 
                    appstore="https://apps.apple.com/in/app/varsity-by-zerodha/id1561620022" 
                />

                <Universe />
            </main>
            <Footer />
        </>
    );
}
