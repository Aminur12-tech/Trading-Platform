import education from '../assets/education.svg';

export default function Education() {
    return (
        <div className="container mt-5 p-5">
            <div className="row align-items-center">
                {/* Image Column */}
                <div className="col-12 col-md-6 mb-4 mb-md-0 text-center">
                    <img src={education} alt="Education illustration" className="img-fluid" />
                </div>

                {/* Text Column */}
                <div className="col-12 col-md-6">
                    <h2>Free and open market education</h2>

                    <p className="mt-4">
                        <strong>Varsity</strong>, the largest online stock market education book in the world covering everything from the basics to advanced trading.
                    </p>
                    <a href="#" className="text-decoration-none">
                        Varsity <i className="fa-solid fa-arrow-right"></i>
                    </a>

                    <p className="mt-4">
                        <strong>TradingQ&A</strong>, the most active trading and investment community in India for all your market-related queries.
                    </p>
                    <a href="#" className="text-decoration-none">
                        TradingQ&A <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}
