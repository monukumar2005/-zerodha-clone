import React from 'react';
function Pricing() {
    return ( 
        <div className='container mt-5 '>
            <div className='row'>
                <div className='col-4'>
                    <h1 className='mb-3 fs-2'>Unbeatable pricing</h1>
                    <p className='text-muted '>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href=''style={{textDecoration:"none"}}>See pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className='col-1'></div>
                <div className='col-6'>
                    <div className='row text-center'>
                        <div className='col-4 p-2 '>
                          <img src='media\pricingEquity.svg'style={{width:"50%"}}/>
                            <p className='text-muted '>
                                Free account opening
                            </p>
                        </div>
                        <div className='col-4 p-2 '>
                             <img src='media\pricingEquity.svg'style={{width:"50%"}}/>
                            <p className='text-muted'>
                                Free equity delivery <br />
                                and direct mutual funds
                            </p>
                        </div>
                        <div className='col-4 p-2 '>
                              <img src='media\intradayTrades.svg' style={{width:"50%"}}/>
                            <p className='text-muted'>
                                Intraday and<br/> F&O
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;