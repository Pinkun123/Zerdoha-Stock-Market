import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row text-center mt-5 mb-5">
        <h2 className="mb-5 text-muted">
          Want to know more about our technology stack? Check out the
          Zerodha.tech blog.
        </h2>
        <h1 className="mt-5">The Zerodha Universe</h1>
        <p className="mt-3 mb-5 text-muted fs-4">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-lg-4 col-sm-6 mt-3">
          <img
            src="media/images/zerodhaFundhouse.png"
            style={{ width: "63%" }}
          ></img>
          <p className="p-4">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>

        <div className="col-lg-4 col-sm-6 mt-4">
          <img
            src="media/images/sensibullLogo.svg"
            style={{ width: "70%" }}
          ></img>
          <p className="p-5" style={{ pading: "2rem" }}>
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>

        <div className="col-lg-4 col-sm-6 mt-3">
          <img src="media/images/tijori.svg" style={{ width: "50%" }}></img>
          <p className="p-4">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>

        <div className="col-lg-4 col-sm-6 mt-3">
          <img src="media/images/streakLogo.png" style={{ width: "50%" }}></img>
          <p className="p-4">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>

        <div className="col-lg-4 col-sm-6 mt-3">
          <img
            src="media/images/smallcaseLogo.png"
            style={{ width: "57%" }}
          ></img>
          <p className="p-4">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-lg-4 col-sm-6 mt-3">
          <img src="media/images/dittoLogo.png" style={{ width: "42%" }}></img>
          <p className="p-4">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
        <button
          type="button"
          className="btn btn-primary text-center w-25 p-3 fs-4 mb-5 mt-5"
          style={{ margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
