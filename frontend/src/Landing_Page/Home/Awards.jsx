import LargestBroker from '../assets/largestBroker.svg';
import pressLogos from '../assets/pressLogos.png';

export default function Awards() {
    return (
        <div className="container mt-5 p-5">
            <div className="row align-items-center ">
                {/* Left Column - Image */}
                <div className="col-12 col-md-6 mb-4 mb-md-0 text-center">
                    <img src={LargestBroker} alt="largestBroker" className="img-fluid" />
                </div>

                {/* Right Column - Text and List */}
                <div className="col-12 col-md-6 mt-4 ">
                    <h2 className="fw-bold">Largest stock broker in India</h2>
                    <p>
                        2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:
                    </p>

                    <div className="row">
                        {/* Left List */}
                        <div className="col-6">
                            <ul className="list-unstyled">
                                <li className="mb-2">Futures and Options</li>
                                <li className="mb-2">Commodity derivatives</li>
                                <li className="mb-2">Currency derivatives</li>
                            </ul>
                        </div>

                        {/* Right List */}
                        <div className="col-6">
                            <ul className="list-unstyled">
                                <li className="mb-2">Stocks & IPOs</li>
                                <li className="mb-2">Direct mutual funds</li>
                                <li className="mb-2">Bonds and Govt. securities</li>
                            </ul>
                        </div>
                    </div>

                    {/* Press Logos */}
                    <div className="text-center text-md-start mt-4">
                        <img src={pressLogos} alt="pressLogos" className="img-fluid" style={{ maxWidth: '90%' }} />
                    </div>
                </div>
            </div>
        </div>
    );
}
