import React from "react";

function Pricing() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-lg-4 col-sm-12">
          <h1 className="mb-4">Unbeatable pricing</h1>
          <p className="text-muted fs-5">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" className="fs-5" style={{ textDecoration: "none" }}>
            See pricing <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-lg-6 col-sm-12 mb-5">
          <div className="row text-center ">
            <div className="col-6 border">
              <h1 className="p-3">₹0</h1>
              <p className="fs-5 p-4">
                {" "}
                Free equity delivery and direct mutual funds
              </p>
            </div>
            <div className="col-6 border">
              <h1 className="p-3">₹20</h1>
              <p className="fs-5 p-4"> Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
