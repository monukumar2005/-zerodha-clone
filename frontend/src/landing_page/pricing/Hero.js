import React from 'react';
function Hero() {
    return ( 
        <div className='container  p-5 mb-0 '>
        <div className='row text-center mt-5 text-muted p-2 '>
        <h2>Charges</h2>
        <p className=' fs-5 text-muted mt-2'> List of all charges and taxes</p>
       
        </div>
        <div className='row text-center mt-5 p-5 '>
            <div className='col-4 p-4'>
                <img src='media\pricingEquity.svg' style={{width:"80%"}}/>
                <h2>Free equity delivery</h2>
                <p className='text-muted mt-4 '>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            </div>
            <div className='col-4 p-4'>
                <img src='media\intradayTrades.svg'style={{width:"80%"}}/>
                <h2>Intraday and F&O trades</h2>
                <p className='text-muted mt-4 '>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>

            </div>
            <div className='col-4 p-4'>
                <img src='media\pricingEquity.svg'style={{width:"80%"}}/>
                <h2>Free direct MF</h2>
                <p className='text-muted mt-4 '>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
            </div>
        </div>
       </div>
     );
}

export default Hero;