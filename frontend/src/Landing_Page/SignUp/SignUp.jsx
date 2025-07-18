import signup from '../assets/signup.png'
import india_flag from '../assets/india-flag.svg'
import { useState } from 'react'


export default function SignUp() {
    const [mobile, setMobile] = useState('');
    const [otp, setOTP] = useState('');
    const [message, setMessage] = useState('');

    const handleSendOtp = async (req, res) => {
        if (!/^\d{10}$/.test(mobile)) {
            setMessage("Please enter a valid 10-digit mobile number");
            return;
        }
        try {
            const res = await fetch('http://localhost:3002/send-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ mobile })
            });
            const data = await res.json();

            if (data.success) {
                setMessage("OTP sent successfully to " + mobile);
            } else {
                setMessage("Failed: " + data.message);
            }


        } catch (error) {
            console.error(error);
            setMessage("Something went wrong. Try again later.");
        }
    }
    const handleVerifyOtp = async (req, res) => {
        try {
            const res = await fetch('http://localhost:3002/verify-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ mobile, otp })
            });
            const data = await res.json();

            if (data.success) {
                setMessage("OTP verified successfully");
                setTimeout(() => {
                    window.location.href = 'http://localhost:5174/';
                }, 1000);
            } else {
                setMessage("Failed: " + data.message);
            }

        } catch (error) {
            console.error(error);
            setMessage("Something went wrong. Try again later.");
        }
    }
    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row text-center mb-5 p-5">
                    <h1>Open a free demat and trading account online</h1>
                    <h5 style={{ color: '#888' }} className='text-muted'>Start investing brokerage free and join a community of 1.6+ crore investors and traders</h5>
                </div>
                <div className="row align-items-center">
                    <div className="col-12 col-md-6 mb-4 text-center">
                        <img src={signup} alt="" className='img-fluid' />
                    </div>
                    <div className="col mt-2 p-3">
                        <h1>Signup now</h1>
                        <h5 style={{ color: '#888' }}>Or track your existing application</h5>
                        <div style={{ display: 'flex' }} className='mt-4 mb-4'>
                            <div className="input-group-text bg-white border-secondary">
                                <img src={india_flag} alt="India Flag" width="20" />
                                <span className="ms-2">+91</span>
                            </div>
                            <input
                                type="text"
                                maxLength="10"
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                                className="form-control border-secondary"
                                placeholder="Enter your mobile number"
                            />
                        </div>
                        <button className="btn btn-primary mb-4 w-100" onClick={handleSendOtp}>
                            Get OTP
                        </button>
                        <div style={{ display: 'flex' }} className='mt-4 mb-4'>
                            <input
                                type="text"
                                maxLength="6"
                                value={otp}
                                onChange={(e) => setOTP(e.target.value)}
                                className="form-control border-secondary"
                                placeholder="Enter OTP"
                            />
                        </div>
                        <button className="btn btn-primary w-100" onClick={handleVerifyOtp}>
                            Verify OTP
                        </button>

                        {message && (
                            <div className='mt-3' style={{ color: message.startsWith('✅') ? 'green' : 'red' }}>
                                {message}
                            </div>
                        )}
                        <div className='mt-4' style={{ fontSize: '0.8rem', color: '#888' }}>
                            <p>By proceeding, you agree to the Zerodha <span style={{ color: '#387ed1' }}>terms</span> & <span style={{ color: '#387ed1' }}>privacy policy</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}