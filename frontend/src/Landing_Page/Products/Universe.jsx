import zerodhafundhouse from '../assets/zerodhaFundhouse.png'
import sensibull from '../assets/sensibullLogo.svg'
import Tijori from '../assets/tijori.svg'
import Streak from '../assets/streakLogo.png'
import smallcase from '../assets/smallcaseLogo.png'
import ditto from '../assets/dittoLogo.png'
import { useNavigate } from 'react-router-dom';

export default function Universe() {
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate('/Signup');
    };

    return (
        <>
            <div className="container mt-5">
                <div className="row mb-5" style={{ textAlign: 'center' }}>
                    <h1 className="mb-3">The Zerodha Universe</h1>
                    <p className='mt-4'>Extend your trading and investment experience even further with our partner platforms</p>
                </div>
                <div className="row" style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#888' }}>
                    <div className="col p-5" style={{ textAlign: 'center' }}>
                        <img src={zerodhafundhouse} alt="zerodhafundhouse" style={{ width: '12rem' }} />
                        <p className='mt-4'>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                    </div>
                    <div className="col p-5" style={{ textAlign: 'center' }}>
                        <img src={sensibull} alt="sensibull" style={{ width: '15rem' }} />
                        <p className='mt-4'>Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
                    </div>
                    <div className="col p-5" style={{ textAlign: 'center' }}>
                        <img src={Tijori} alt="tijori" style={{ width: '9rem' }} />
                        <p className='mt-4'>Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.</p>
                    </div>
                </div>
                <div className="row" style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#888' }}>
                    <div className="col p-5" style={{ textAlign: 'center' }}>
                        <img src={Streak} alt="Streak" style={{ width: '10rem' }} />
                        <p className='mt-4'>systematic trading platform that allows you to create and backtest strategies without coding.</p>
                    </div>
                    <div className="col p-5" style={{ textAlign: 'center' }}>
                        <img src={smallcase} alt="smallcase" style={{ width: '13rem' }} />
                        <p className='mt-4'>Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</p>
                    </div>
                    <div className="col p-5" style={{ textAlign: 'center' }}>
                        <img src={ditto} alt="ditto" style={{ width: '9rem' }} />
                        <p className='mt-4'>Personalized advice on life and health insurance. No spam and no mis-selling.</p>
                    </div>
                </div>
                <div className="mt-2" style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <button type="button" class="btn btn-primary" style={{ width: '14rem' }} onClick={handleClick} >Sign up for free</button>
                </div>
            </div>
        </>
    )
}