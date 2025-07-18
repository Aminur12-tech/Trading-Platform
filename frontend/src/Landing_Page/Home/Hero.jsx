import Homehero from '../assets/homeHero.png'
import { useNavigate } from 'react-router-dom';

export default function Hero() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/Signup');
    };
    
    
    return (
        <>
            <div className="container p-1 mt-5">
                <div className="row text-center">
                    <img src={Homehero} alt="Hero" className='mb-5' />
                    <h1>Invest in everything</h1>
                    <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                    <button type="button" class="btn btn-primary" style={{ width: '10rem', margin:'auto' }} onClick={handleClick}>SignUp Now</button>
                </div>
            </div>
        </>
    )
}