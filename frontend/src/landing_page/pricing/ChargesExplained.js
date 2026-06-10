import React from 'react';

function ChargesExplained() {
    return (
        <div className='container mb-5'style={{marginLeft:"200px", paddingRight:"200px", paddingTop:"90px"}}>
            <h4  className='mb-5' classstyle={{ fontWeight: '400', fontSize: '25px', color: '#444',  }}>
                Charges explained
            </h4>

            <div className='row'>
                {/* Left Column */}
                <div className='col-6'>

                    <h6 style={{ fontWeight: '450', fontSize: '20px', color: '#444', marginBottom: '14px' }}>Securities/Commodities transaction tax</h6>
                    <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.8', marginBottom: '14px' }}>
                        Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.
                    </p>
                    <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.8', marginBottom: '36px' }}>
                        When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.
                    </p>

                    <h6 style={{ fontWeight: '400', fontSize: '20px', color: '#444', marginBottom: '14px' }}>Transaction/Turnover Charges</h6>
                    <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.8', marginBottom: '14px' }}>
                        Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.
                    </p>
                    <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.8', marginBottom: '14px' }}>
                        BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)
                    </p>
                    <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.8', marginBottom: '14px' }}>
                        BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.
                    </p>
                    <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.8', marginBottom: '14px' }}>
                        BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.
                    </p>
                    <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.8', marginBottom: '36px' }}>
                        BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.
                    </p>

                    <h6 style={{ fontWeight: '400', fontSize: '20px', color: '#444', marginBottom: '14px' }}>Call & trade</h6>
                    <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.8', marginBottom: '36px' }}>
                        An additional charge of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.
                    </p>

                    <h6 style={{ fontWeight: '400', fontSize: '20px', color: '#444', marginBottom: '14px' }}>Stamp charges</h6>
                    <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.8', marginBottom: '36px' }}>
                        Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.
                    </p>

                    <h6 style={{ fontWeight: '400', fontSize: '20px', color: '#444', marginBottom: '14px' }}>NRI brokerage charges</h6>
                    <ul style={{ fontSize: '14px', color: '#666', lineHeight: '2', marginBottom: '36px', paddingLeft: '20px' }}>
                        <li>For a non-PIS account, 0.5% or ₹50 per executed order for equity and F&O (whichever is lower).</li>
                        <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                        <li>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
                    </ul>

                    <h6 style={{ fontWeight: '400', fontSize: '20px', color: '#444', marginBottom: '14px' }}>Account with debit balance</h6>
                    <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.8', marginBottom: '36px' }}>
                        If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.
                    </p>

                    <h6 style={{ fontWeight: '400', fontSize: '20px', color: '#444', marginBottom: '14px' }}>Charges for Investor's Protection Fund Trust (IPFT) by NSE</h6>
                    <ul style={{ fontSize: '14px', color: '#666', lineHeight: '2', marginBottom: '36px', paddingLeft: '20px' }}>
                        <li>Equity and Futures - ₹0.01 per crore + GST of the traded value.</li>
                        <li>Options - ₹0.01 per crore + GST traded value (premium value).</li>
                        <li>Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</li>
                    </ul>

                    <h6 style={{ fontWeight: '400', fontSize: '20px', color: '#444', marginBottom: '14px' }}>Margin Trading Facility (MTF)</h6>
                    <ul style={{ fontSize: '14px', color: '#666', lineHeight: '2', marginBottom: '36px', paddingLeft: '20px' }}>
                        <li>MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. The interest is applied from T+1 day until the day MTF stocks are sold.</li>
                        <li>MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.</li>
                        <li>MTF pledge charge: ₹15 + GST per pledge and unpledge request per ISIN.</li>
                    </ul>
                </div>

                {/* Right Column */}
                <div className='col-6'>

                    <h6 style={{ fontWeight: '400', fontSize: '20px', color: '#444', marginBottom: '14px' }}>GST</h6>
                    <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.8', marginBottom: '36px' }}>
                        Tax levied by the government on the services rendered. 18% of (brokerage + SEBI charges + transaction charges)
                    </p>

                    <h6 style={{ fontWeight: '400', fontSize: '20px', color: '#444', marginBottom: '14px' }}>SEBI Charges</h6>
                    <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.8', marginBottom: '36px' }}>
                        Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.
                    </p>

                    <h6 style={{ fontWeight: '400', fontSize: '20px', color: '#444', marginBottom: '14px' }}>DP (Depository participant) charges</h6>
                    <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.8', marginBottom: '14px' }}>
                        ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.
                    </p>
                    <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.8', marginBottom: '14px' }}>
                        Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.
                    </p>
                    <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.8', marginBottom: '36px' }}>
                        Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.
                    </p>

                    <h6 style={{ fontWeight: '400', fontSize: '20px', color: '#444', marginBottom: '14px' }}>Pledging charges</h6>
                    <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.8', marginBottom: '36px' }}>
                        ₹30 + GST per pledge request per ISIN.
                    </p>

                    <h6 style={{ fontWeight: '400', fontSize: '20px', color: '#444', marginBottom: '14px' }}>AMC (Account maintenance charges)</h6>
                    <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.8', marginBottom: '10px' }}>
                        To learn more about BSDA, <a href='#' style={{ color: '#387ed1' }}>Click here</a>
                    </p>
                    <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.8', marginBottom: '36px' }}>
                        For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn more about AMC, <a href='#' style={{ color: '#387ed1' }}>Click here</a>
                    </p>

                    <h6 style={{ fontWeight: '400', fontSize: '20px', color: '#444', marginBottom: '14px' }}>Corporate action order charges</h6>
                    <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.8', marginBottom: '36px' }}>
                        ₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.
                    </p>

                    <h6 style={{ fontWeight: '400', fontSize: '20px', color: '#444', marginBottom: '14px' }}>Off-market transfer charges</h6>
                    <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.8', marginBottom: '36px' }}>
                        ₹25 per transaction.
                    </p>

                    <h6 style={{ fontWeight: '400', fontSize: '20px', color: '#444', marginBottom: '14px' }}>Physical CMR request</h6>
                    <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.8', marginBottom: '36px' }}>
                        First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests.
                    </p>

                    <h6 style={{ fontWeight: '400', fontSize: '20px', color: '#444', marginBottom: '14px' }}>Payment gateway charges</h6>
                    <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.8', marginBottom: '36px' }}>
                        ₹9 + GST (Not levied on transfers done via UPI)
                    </p>

                    <h6 style={{ fontWeight: '400', fontSize: '20px', color: '#444', marginBottom: '14px' }}>Delayed Payment Charges</h6>
                    <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.8', marginBottom: '36px' }}>
                        Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading account. <a href='#' style={{ color: '#387ed1' }}>Learn more</a>.
                    </p>

                    <h6 style={{ fontWeight: '400', fontSize: '20px', color: '#444', marginBottom: '14px' }}>Trading using 3-in-1 account with block functionality</h6>
                    <ul style={{ fontSize: '14px', color: '#666', lineHeight: '2', paddingLeft: '20px' }}>
                        <li><strong>Delivery & MTF Brokerage:</strong> 0.5% per executed order.</li>
                        <li><strong>Intraday Brokerage:</strong> 0.05% per executed order.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ChargesExplained;