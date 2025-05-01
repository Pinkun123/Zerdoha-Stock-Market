import React from "react";

function Hero() {
  return (
    <div
      className="container mb-5 mt-5"
      style={{ marginTop: "50px !important" }}
    >
      <div className="row text-center mt-5 mb-5">
        <h1 className="mb-4">Zerodha Products</h1>
        <h3 className="mb-3 text-muted">
          Sleek, modern, and intuitive trading platforms
        </h3>
        <p className="fs-5 text-muted mb-5">
          Check out our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            investment offerings <i class="fa-solid fa-arrow-right"></i>
          </a>{" "}
        </p>
      </div>
      <div className="row border-bottom mt-5 mb-5"></div>
    </div>
  );
}

export default Hero;
