import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row">
        <h1 className="mt-5 p-5 text-center text-muted">
          We pioneered the discount broking model in India.<br></br> Now, we are
          breaking ground with our technology.
        </h1>
      </div>
      <div className="mt-5 p-5 border-top"></div>
      <div className="row mt-2 p-5">
        <div className="col-lg-6 col-sm-12 ">
          <p className="fs-4 text-muted">
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <p className="fs-4 text-muted">
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p className="fs-4 text-muted">
            Over 1+ Crore clients place millions of orders every day through our
            powerful ecosystem of investment platforms, contributing over 15% of
            all Indian retail trading volumes.
          </p>
        </div>
        <div className="col-lg-6 col-sm-12 ">
          <p className="fs-4 text-muted">
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p className="fs-4 text-muted">
            <a href="" style={{ textDecoration: "none" }}>
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>
          <p className="fs-4 text-muted">
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our{" "}
            <a href="" style={{ textDecoration: "none" }}>
              blog
            </a>{" "}
            or see what the media is{" "}
            <a href="" style={{ textDecoration: "none" }}>
              saying about us
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
