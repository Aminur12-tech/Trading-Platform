import pricing0 from '../assets/pricing0.svg';
import pricingEquity from '../assets/pricingEquity.svg';
import pricingMF from '../assets/pricingMF.svg';

export default function Pricing() {
    return (
        <div className="container mt-5 p-5">
            <div className="row align-items-center">
                
                <div className="col-12 col-md-5 mb-4 mb-md-0">
                    <h1>Unbeatable pricing</h1>
                    <p className="mt-4">
                        We pioneered the concept of discount broking and price transparency in India.
                        Flat fees and no hidden charges.
                    </p>
                    <a href="#" className="text-decoration-none">
                        See pricing <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>

                <div className="d-none d-md-block col-md-2"></div>

                <div className="col-12 col-md-5">
                    <div className="row text-center gy-4">
                        <div className="col-12 col-sm-4">
                            <img src={pricing0} alt="Free account opening" className="img-fluid mb-2" />
                            <p className="small">Free account opening</p>
                        </div>
                        <div className="col-12 col-sm-4">
                            <img src={pricingEquity} alt="Free equity delivery and direct mutual funds" className="img-fluid mb-2" />
                            <p className="small">Free equity delivery <br /> and direct mutual funds</p>
                        </div>
                        <div className="col-12 col-sm-4">
                            <img src={pricingMF} alt="Intraday and F&O" className="img-fluid mb-2" />
                            <p className="small">Intraday and <br /> F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
