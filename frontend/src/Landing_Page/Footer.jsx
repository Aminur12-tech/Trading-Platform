import logo from '../Landing_Page/assets/logo.svg';

export default function Footer() {
    return (
        <div className="container-fluid mt-5 py-4" style={{ backgroundColor: '#f4efef', color: '#666' }}>
            <div className="container">
                {/* Top Section */}
                <div className="row row-cols-1 row-cols-md-5 g-4 px-3 px-md-5">

                    {/* Branding + Socials */}
                    <div className="col">
                        <img src={logo} alt="logo" style={{ width: '8rem' }} />
                        <p className="mt-2 small">© 2010 - 2025, Zerodha Broking Ltd. All rights reserved.</p>

                        <div className="d-flex flex-wrap gap-3 py-3 border-bottom border-secondary-subtle">
                            <a href="#" className="text-decoration-none text-muted"><i className="fa-brands fa-x-twitter"></i></a>
                            <a href="#" className="text-decoration-none text-muted"><i className="fa-brands fa-square-facebook"></i></a>
                            <a href="#" className="text-decoration-none text-muted"><i className="fa-brands fa-instagram"></i></a>
                            <a href="#" className="text-decoration-none text-muted"><i className="fa-brands fa-linkedin-in"></i></a>
                            <a href="#" className="text-decoration-none text-muted"><i className="fa-brands fa-youtube"></i></a>
                            <a href="#" className="text-decoration-none text-muted"><i className="fa-brands fa-whatsapp"></i></a>
                            <a href="#" className="text-decoration-none text-muted"><i className="fa-brands fa-telegram"></i></a>
                        </div>
                    </div>

                    {/* Account Links */}
                    <div className="col">
                        <h6>Account</h6>
                        <p>Open demat account</p>
                        <p>Minor demat account</p>
                        <p>NRI demat account</p>
                        <p>Commodity</p>
                        <p>Dematerialisation</p>
                        <p>Fund transfer</p>
                        <p>MTF</p>
                        <p>Referral program</p>
                    </div>

                    {/* Support Links */}
                    <div className="col">
                        <h6>Support</h6>
                        <p>Contact us</p>
                        <p>Support portal</p>
                        <p>How to file a complaint?</p>
                        <p>Status of your complaints</p>
                        <p>Dematerialisation</p>
                        <p>Bulletin</p>
                        <p>Circular</p>
                        <p>Z-Connect blog</p>
                        <p>Downloads</p>
                    </div>

                    {/* Company Links */}
                    <div className="col">
                        <h6>Company</h6>
                        <p>About</p>
                        <p>Philosophy</p>
                        <p>Press & media</p>
                        <p>Careers</p>
                        <p>Zerodha Cares (CSR)</p>
                        <p>Zerodha.tech</p>
                        <p>Open source</p>
                    </div>

                    {/* Quick Links */}
                    <div className="col">
                        <h6>Quick links</h6>
                        <p>Upcoming IPOs</p>
                        <p>Brokerage charges</p>
                        <p>Market holidays</p>
                        <p>Economic calendar</p>
                        <p>Calculators</p>
                        <p>Markets</p>
                        <p>Sectors</p>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="row justify-content-center text-center mt-4 px-2 px-md-5">
                    <div className="col-12 d-flex flex-wrap justify-content-center gap-3 small">
                        <p className="mb-0">NSE</p>
                        <p className="mb-0">BSE</p>
                        <p className="mb-0">MCX</p>
                        <p className="mb-0">Terms & conditions</p>
                        <p className="mb-0">Policies & procedures</p>
                        <p className="mb-0">Privacy policy</p>
                        <p className="mb-0">Disclosure</p>
                        <p className="mb-0">For investor's attention</p>
                        <p className="mb-0">Investor charter</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
