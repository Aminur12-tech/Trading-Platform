export default function CreateTicket(){
    return (
        <>
            <div className="container">
                <h4 style={{color:'#999'}}>To create a ticket, select a relevant topic</h4>
                <div className="row mt-4">
                    <div className="col">
                        <a href="" style={{textDecoration:'none', display:'flex',gap:'0.5rem', alignItems:'center', color:'#555', margin:'1.5rem 0.1rem'}}><i class="fa-regular fa-square-plus"></i>Account Opening</a>
                        <div style={{display:'flex', flexDirection:'column', paddingLeft:'1rem', lineHeight:'2rem'}}>
                            <a href="" style={{textDecoration:'none'}}>Resident individual</a>
                            <a href="" style={{textDecoration:'none'}}>Minor</a>
                            <a href="" style={{textDecoration:'none'}}>Non Resident Indian (NRI)</a>
                            <a href="" style={{textDecoration:'none'}}>Company, Partnership, HUF and LLP</a>
                            <a href="" style={{textDecoration:'none'}}>Glossary</a>
                        </div>
                    </div>
                    <div className="col">
                        <a href="" style={{textDecoration:'none', display:'flex',gap:'0.5rem', alignItems:'center', color:'#555', margin:'1.5rem 0.1rem'}}><i class="fa-solid fa-user"></i>Your Zerodha Account</a>
                        <div style={{display:'flex', flexDirection:'column', paddingLeft:'1rem', lineHeight:'2rem'}}>
                            <a href="" style={{textDecoration:'none'}}>Your Profile</a>
                            <a href="" style={{textDecoration:'none'}}>Account modification</a>
                            <a href="" style={{textDecoration:'none'}}>Client Master Report (CMR) and Depository Participant (DP)</a>
                            <a href="" style={{textDecoration:'none'}}>Nomination</a>
                            <a href="" style={{textDecoration:'none'}}>Transfer and conversion of securities</a>
                        </div>
                    </div>
                    <div className="col">
                        <a href="" style={{textDecoration:'none', display:'flex',gap:'0.5rem', alignItems:'center', color:'#555', margin:'1.5rem 0.1rem'}}><i class="fa-solid fa-chart-simple"></i>Kite</a>
                        <div style={{display:'flex', flexDirection:'column', paddingLeft:'1rem', lineHeight:'2rem'}}>
                            <a href="" style={{textDecoration:'none'}}>IPO</a>
                            <a href="" style={{textDecoration:'none'}}>Trading FAQs</a>
                            <a href="" style={{textDecoration:'none'}}>Margin Trading Facility (MTF) and Margins</a>
                            <a href="" style={{textDecoration:'none'}}>Charts and orders</a>
                            <a href="" style={{textDecoration:'none'}}>Alerts and Nudges</a>
                            <a href="" style={{textDecoration:'none'}}>General</a>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col">
                        <a href="" style={{textDecoration:'none', display:'flex',gap:'0.5rem', alignItems:'center', color:'#555', margin:'1.5rem 0.1rem'}}><i class="fa-solid fa-wallet"></i>Funds</a>
                        <div style={{display:'flex', flexDirection:'column', paddingLeft:'1rem', lineHeight:'2rem'}} >
                            <a href="" style={{textDecoration:'none'}}>Add money</a>
                            <a href="" style={{textDecoration:'none'}}>Withdraw money</a>
                            <a href="" style={{textDecoration:'none'}}>Add bank accounts</a>
                            <a href="" style={{textDecoration:'none'}}>eMandates</a>
                        </div>
                    </div>
                    <div className="col">
                        <a href="" style={{textDecoration:'none', display:'flex',gap:'0.5rem', alignItems:'center', color:'#555', margin:'1.5rem 0.1rem'}}><i class="fa-solid fa-c"></i>Console</a>
                        <div style={{display:'flex', flexDirection:'column', paddingLeft:'1rem', lineHeight:'2rem'}}>
                            <a href="" style={{textDecoration:'none'}}>Portfolio</a>
                            <a href="" style={{textDecoration:'none'}}>Corporate actions</a>
                            <a href="" style={{textDecoration:'none'}}>Funds statement</a>
                            <a href="" style={{textDecoration:'none'}}>Reports</a>
                            <a href="" style={{textDecoration:'none'}}>Profile</a>
                            <a href="" style={{textDecoration:'none'}}>Segments</a>
                        </div>
                    </div>
                    <div className="col">
                        <a href="" style={{textDecoration:'none', display:'flex',gap:'0.5rem', alignItems:'center', color:'#555', margin:'1.5rem 0.1rem'}}><i class="fa-solid fa-coins"></i>Coin</a>
                        <div style={{display:'flex', flexDirection:'column', paddingLeft:'1rem', lineHeight:'2rem'}}>
                            <a href="" style={{textDecoration:'none'}}>Mutual funds</a>
                            <a href="" style={{textDecoration:'none'}}>National Pension Scheme (NPS)</a>
                            <a href="" style={{textDecoration:'none'}}>Features on Coin</a>
                            <a href="" style={{textDecoration:'none'}}>Payments and Orders</a>
                            <a href="" style={{textDecoration:'none'}}>General</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}