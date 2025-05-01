import React from "react";

function LeftSection({
  imgUrl,
  productName,
  prodcutDescription,
  tryDemo,
  learnMore,
  palyStore,
  appStore,
}) {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-lg-8 col-sm-6 mt-1">
          <img src={imgUrl} style={{ width: "75%" }}></img>
        </div>
        <div className="col-lg-4 col-sm-6 mt-5 p-4">
          <h1 className="mb-4">{productName}</h1>
          <p className="fs-5 text-muted mb-3">{prodcutDescription}</p>
          <div className="mb-4 ">
            <a
              href={tryDemo}
              className="fs-5"
              style={{ textDecoration: "none", marginRight: "75px" }}
            >
              Try demo <i class="fa-solid fa-arrow-right"></i>
            </a>
            <a
              href={learnMore}
              className="fs-5"
              style={{ textDecoration: "none", marginRight: "40px" }}
            >
              Learn more <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="mb-5">
            <a
              href={palyStore}
              style={{
                textDecoration: "none",
                marginRight: "30px",
              }}
            >
              <img
                src="media/images/googlePlayBadge.svg"
                style={{ width: "40%" }}
              ></img>
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                style={{ width: "40%" }}
              ></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
