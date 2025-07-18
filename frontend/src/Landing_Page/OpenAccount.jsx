import { useNavigate } from 'react-router-dom';

export default function OpenAccount() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/Signup');
    };
    
    return (
        <>
            <div className="container mt-5 ">
                <div className="row mb-5 p-5" >
                    <div className="col" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection:'column' , gap:'20px', marginTop:'40px'}}>
                        <h2>Open a Zerodha account</h2>
                        <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades. </p>
                        <button type="button" class="btn btn-primary" style={{ width: '14rem' }} onClick={handleClick}>Sign up for free</button>
                    </div>
                </div>
            </div>
        </>
    )
}