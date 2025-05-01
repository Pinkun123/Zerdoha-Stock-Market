import React from "react";

function Award() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <img src="media/images/largestBroker.svg"></img>
        </div>
        <div className="col-lg-6 col-sm-12 mt-5">
          <h1>Largest stock broker in india</h1>
          <p className="p-2 fs-5">
            2+ million Zerodha clinets to over 15% of all reatil oder volumns in
            india daily by trading and investing in
          </p>
          <div className="row">
            <div className="col-6 ">
              <ul>
                <li className="p-1 fs-5">Futures and Options</li>
                <li className="p-1 fs-5">Commodity and Derivatives</li>
                <li className="p-1 fs-5">Currency and Derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li className="p-1 fs-5">Stocks and IPOs</li>
                <li className="p-1 fs-5">Direct mutual funds</li>
                <li className="p-1 fs-5">Bonds and Govt.Securites</li>
              </ul>
            </div>
            <img src="media/images/pressLogos.png"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Award;
