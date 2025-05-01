import React from "react";

function Team() {
  return (
    <div className="container mb-5">
      <div className="row mb-5">
        <h1 className="mt-5 p-5 text-center text-muted">People</h1>
        <div className="col-lg-5 col-sm-12 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            className="rounded-circle "
            style={{ width: "70%" }}
          ></img>
          <h2 className="mb-4 mt-3 text-muted">Nithin Kamath</h2>
          <p className="fs-5 text-muted">Founder, CEO</p>
        </div>
        <div className="col-lg-7 col-sm-12 mb-5">
          <p className="fs-4 text-muted">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p className="fs-4 text-muted">
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p className="fs-4 text-muted">Playing basketball is his zen.</p>
          <p className="fs-4 text-muted">
            Connect on{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Homepage
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
