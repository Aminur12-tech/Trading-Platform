import pricing0 from '../assets/pricing0.svg';
import intradayTrades from '../assets/intradayTrades.svg';
import pricingEquity from '../assets/pricingEquity.svg';

export default function Hero() {
    return (
        <div className="container my-5">
            {/* Heading Section */}
            <div className="row text-center mb-5">
                <h1>Charges</h1>
                <h4 className="text-muted">List of all charges and taxes</h4>
            </div>

            {/* Pricing Cards */}
            <div className="row text-center gy-5">
                <div className="col-12 col-md-4">
                    <img src={pricing0} alt="Free equity delivery" className="mb-3" style={{ maxHeight: '80px' }} />
                    <h3>Free equity delivery</h3>
                    <p className="text-muted">
                        All equity delivery investments (NSE, BSE) are absolutely free — ₹0 brokerage.
                    </p>
                </div>

                <div className="col-12 col-md-4">
                    <img src={intradayTrades} alt="Intraday and F&O trades" className="mb-3" style={{ maxHeight: '80px' }} />
                    <h3>Intraday and F&O trades</h3>
                    <p className="text-muted">
                        Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity. Flat ₹20 on all option trades.
                    </p>
                </div>

                <div className="col-12 col-md-4">
                    <img src={pricingEquity} alt="Free direct mutual funds" className="mb-3" style={{ maxHeight: '80px' }} />
                    <h3>Free direct MF</h3>
                    <p className="text-muted">
                        All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges.
                    </p>
                </div>
            </div>
        </div>
    );
}
