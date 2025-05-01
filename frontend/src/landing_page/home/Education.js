import React from "react";

function Education() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-lg-6 col-sm-12 mt-5">
          <img src="media/images/education.svg"></img>
        </div>
        <div className="col-lg-6 col-sm-12 mt-5 mb-5">
          <h1 className="mt-4 mb-3">Free and open market education</h1>
          <p className="text-muted fs-5 mb-3 mt-4 ">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading
          </p>
          <a href="" className="fs-5 " style={{ textDecoration: "none" }}>
            Varsity <i class="fa-solid fa-arrow-right"></i>{" "}
          </a>
          <p className="text-muted fs-5 mb-3 mt-4 ">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="" className="fs-5" style={{ textDecoration: "none" }}>
            TradingQ&A <i class="fa-solid fa-arrow-right"></i>{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
