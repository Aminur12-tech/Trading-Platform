import pressLogos from '../assets/pressLogos.png';
import ecosystem from '../assets/ecosystem.png';

export default function Stats() {
    return (
        <div className="container py-5 p-5">
            <div className="row align-items-center">
                
                <div className="col-12 col-md-6 mb-5 mb-md-0 px-4">
                    <h1 className="mb-4">Trust with confidence</h1>

                    <h3 className="mt-4">Customer-first always</h3>
                    <p>
                        That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.
                    </p>

                    <h3 className="mt-4">No spam or gimmicks</h3>
                    <p>
                        No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.
                        <br />
                        <a href="#" style={{ color: '#387ed1', textDecoration: 'none' }}>Our philosophies.</a>
                    </p>

                    <h3 className="mt-4">The Zerodha universe</h3>
                    <p>
                        Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
                    </p>

                    <h3 className="mt-4">Do better with money</h3>
                    <p>
                        With initiatives like <span style={{ color: '#387ed1' }}>Nudge</span> and <span style={{ color: '#387ed1' }}>Kill Switch</span>, we don't just facilitate transactions, but actively help you do better with your money.
                    </p>
                </div>

                
                <div className="col-12 col-md-6 text-center px-4">
                    <img
                        src={ecosystem}
                        alt="ecosystem"
                        className="img-fluid mt-4"
                        style={{ maxHeight: '500px', objectFit: 'contain' }}
                    />
                    <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mt-4">
                        <a href="#" className="text-decoration-none">
                            Explore our products <i className="fa-solid fa-arrow-right"></i>
                        </a>
                        <a href="#" className="text-decoration-none">
                            Try Kite demo <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>

            
            <div className="row mt-5 justify-content-center">
                <div className="col-10 col-md-6 text-center">
                    <img src={pressLogos} alt="presslogos" className="img-fluid" />
                </div>
            </div>
        </div>
    );
}
