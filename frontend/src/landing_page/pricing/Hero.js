import React from "react";

function Hero() {
  return (
    <div className="container ">
      <div className="row mt-5  text-center">
        <div className="mt-5 mb-5 ">
          <h1 className="mt-5 mb-2 fs-1">Charges</h1>
          <h3 className="mb-5 text-muted">List of all charges and taxes</h3>
        </div>
        <div className=" row mt-5 mb-5 ">
          <div className="col-lg-4 col-sm-6">
            <img src="media/images/pricing0.svg" style={{ width: "75%" }}></img>
            <h2>Free equity delivery</h2>
            <p className="fs-5 text-muted">
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage.
            </p>
          </div>
          <div className="col-lg-4 col-sm-6">
            <img
              src="media/images/otherTrades.svg"
              style={{ width: "75%" }}
            ></img>
            <h2>Intraday and F&O trades</h2>
            <p className="fs-5 text-muted">
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
              Flat ₹20 on all option trades.
            </p>
          </div>
          <div className="col-lg-4 col-sm-6">
            <img src="media/images/pricing0.svg" style={{ width: "75%" }}></img>
            <h2>Free direct MF</h2>
            <p className="fs-5 text-muted">
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
