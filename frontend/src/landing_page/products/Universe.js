import React from "react";

function Universe() {
  return (
    <div className="container text-center mt-5 ">

      <h2 className="mb-4  ">The Zerodha Universe</h2>

      <p
        className="text-muted mb-5"
        style={{ fontSize: "1.2rem" }}
      >
        Extend your trading and investment experience even further with our
        partner platforms
      </p>

      {/* First Row */}
      <div className="row mb-5 justify-content-center p-2 ">

        <div className="col-4 p-3 mt-5" >
          <img src="media/zerodhaFundhouse.png" alt="" className="img-fluid mb-3"style={{ maxWidth: "50%" }} />
          <p className="text-muted ">
            Our asset management venture
            <br />
            that is creating simple and transparent index
            <br />
            funds to help you save for your goals.
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/sensibullLogo.svg" alt="" className="img-fluid mb-3" style={{ maxWidth: "100%" }}/>
          <p className="text-muted">
            Options trading platform that lets you
            <br />
            create strategies, analyze positions, and examine
            <br />
            data points like open interest, FII/DII, and more.
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/tijori.svg" alt="" className="img-fluid mb-3"style={{ maxWidth: "35%" }} />
          <p className="text-muted">
            Investment research platform
            <br />
            that offers detailed insights into stocks,
            <br />
            sectors, supply chains, and more.
          </p>
        </div>

      </div>

      {/* Second Row */}
      <div className="row mb-5 mt-5 justify-content-center">

        <div className="col-4 p-3 mt-5">
          <img src="media/streakLogo.png" alt="" className="img-fluid mb-3"style={{ maxWidth: "40%" }} />
          <p className="text-muted">
            Systematic trading platform
            <br />
            that allows you to create and backtest
            <br />
            strategies without coding.
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/smallcaseLogo.png" alt="" className="img-fluid mb-3"style={{ maxWidth: "50%" }} />
          <p className="text-muted">
            Thematic investing platform
            <br />
            that helps you invest in diversified
            <br />
            baskets of stocks on ETFs.
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/dittoLogo.png" alt="" className="img-fluid mb-3"style={{ maxWidth: "35%" }} />
          <p className="text-muted">
            Personalized advice on life
            <br />
            and health insurance. No spam
            <br />
            and no mis-selling.
          </p>
        </div>

      </div>

       <button className='p-2 btn btn-primary fs-5' style={{width:"15%",margin:"0 auto"}}>Sign up for free</button>

    </div>
  );
}

export default Universe;