import React from "react";

function Hero() {
  return (
    <div className="bg-primary w-100 text-white">
      <div className="container mb-5">
        <div className="row">
          <div className=""></div>
          <h3 className="float-start mt-5">Support Portal</h3>

          <div className="col-lg-8 col-sm-12 mt-5">
            <h2>
              Search for an answer or browse help topics to create a ticket
            </h2>
            <div className="mt-5 mb-4">
              <form className="d-flex mb-4" role="search">
                <input
                  style={{ height: "65Px" }}
                  class="form-control me-2 fs-5 text-muted"
                  type="search"
                  placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."
                  aria-label="Search"
                />
              </form>
              <a href="" className="fs-4 mx-3 text-white">
                Track account opening
              </a>
              <a href="" className="fs-4 mx-3 mb-1 text-white">
                Track segment activation
              </a>
              <a href="" className="fs-4 mx-3 mb-1 text-white">
                {" "}
                Intraday margins
              </a>
              <br></br>
              <a href="" className="fs-4 mx-3 mb-1 text-white">
                Kite user manual
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12">
            <a className="fs-4 text-white  d-flex flex-row-reverse" href="">
              Track tickets
            </a>
            <h3 className="mt-5">Featured</h3>

            <a href="" className="fs-4 mx-3 mb-1 text-white">
              1.Change in expiry day of NSE
            </a>
            <br></br>
            <a href="" className="fs-4 mx-3 mb-1 text-white">
              2. Trading holiday on account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
