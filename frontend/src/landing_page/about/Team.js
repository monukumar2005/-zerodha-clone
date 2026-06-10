import React from 'react';
function Team() {
    return ( 
         <div className='container '>
            <div className='row py-1  border-top'>
                <h1 className=' text-center  my-2 'style={{  opacity: 0.95 ,fontSize: "25px" }}>People</h1>
            </div>
            <div className='row  p-3   fs-6 justify-content-center'style={{lineHeight:"1.8",fontSize:"1.2em"}}>
               <div className='col-md-4 p-3 text-center text-muted'>
              <img src='media/nithinkamath.jpg'style={{  borderRadius:"100%", width:"70%" }}/>
              <h4 className='mt-5'>Nithin Kamath</h4>
              <h6>Founder, CEO</h6>
               </div>
               <div className='col-md-6 p-2'style={{  opacity: 0.95 ,fontSize: "16px" }}>
                <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                <p>Playing basketball is his zen.</p>
                <p >Connect on <a href='Homepage' style={{textDecoration:"none"}}>Homepage</a> / <a href='TradingQnA'style={{textDecoration:"none"}}>TradingQnA</a> / <a href='Twitter'style={{textDecoration:"none"}}>Twitter</a></p>

               </div>
            </div>

        </div>
      );
     
}

export default Team;