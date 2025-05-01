import React from "react";

function Hero() {
  return (
    <div className="container mb-5 mt-5  ">
      <div className="row p-5">
        <img src="media/images/homeHero.png " className="mb-5"></img>
        <h1 className="text-center fs-1 p2">Invest in everything</h1>
        <p className="text-center fs-4 p-2">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button
          type="button"
          className="btn btn-primary text-center w-25 p-3 fs-4 mb-5"
          style={{ margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Hero;
