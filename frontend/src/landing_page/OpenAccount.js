import React from "react";

function OpenAccount() {
  return (
    <div className="container mb-5 mt-5 ">
      <div className="row p-5">
        <h1 className="text-center fs-1 p2">Open a Zerodha account</h1>
        <p className="text-center fs-4 p-4">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
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

export default OpenAccount;
