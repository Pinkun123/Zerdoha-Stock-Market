import React from "react";

function Stats() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row mt-5">
        <div className="col-lg-6 col-sm-12 mt-5">
          <h1 className="mb-5 mt-5">Trust with confidence</h1>

          <h3 className="mb-3">Customer-first always</h3>
          <p className="text-muted fs-5">
            That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>

          <h3 className="mb-3">No spam or gimmicks</h3>
          <p className="text-muted fs-5 ">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>

          <h3 className="mb-3">The Zerodha universe</h3>
          <p className="text-muted fs-5">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h3 className="mb-3">Do better with money</h3>
          <p className="text-muted fs-5">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-lg-6 col-sm-12  mt-3 p-5 mb-5 ">
          <img src="media/images/ecosystem.png" style={{ width: "110%" }}></img>
          <div>
            <a href="" className="mx-5 fs-5" style={{ textDecoration: "none" }}>
              Explore our products <i class="fa-solid fa-arrow-right"></i>
            </a>
            <a href="" className="mx-5 fs-5" style={{ textDecoration: "none" }}>
              Try Kite demo <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
