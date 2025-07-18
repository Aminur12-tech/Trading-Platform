export default function Brokerage() {
    return (
        <div className="container py-5">
            <div className="row border-top pt-5">
                {/* Left Section */}
                <div className="col-12 col-md-9 mb-4 mb-md-0">
                    <a href="#" style={{ textDecoration: 'none' }}>
                        <h4 className="text-center text-md-start">Brokerage calculator</h4>
                    </a>
                    <ul className="mt-4 text-muted" style={{ lineHeight: '1.8', fontSize: '0.9rem' }}>
                        <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
                        <li>Digital contract notes will be sent via e-mail.</li>
                        <li>Physical copies of contract notes, if required, shall be charged ₹20 per note. Courier charges apply.</li>
                        <li>For NRI account (non-PIS): 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                        <li>For NRI account (PIS): 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                        <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20.</li>
                    </ul>
                </div>

                {/* Right Section */}
                <div className="col-12 col-md-3 text-center text-md-start">
                    <a href="#" style={{ textDecoration: 'none' }}>
                        <h4>List of charges</h4>
                    </a>
                </div>
            </div>
        </div>
    );
}
