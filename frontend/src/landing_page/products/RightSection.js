import React from "react";

function RightSection({ imgUrl, productName, prodcutDescription, learnMore }) {
  return (
    <div className="container ">
      <div className="row ">
        <div className="col-lg-4 col-sm-6 mt-5 p-5 ">
          <h1 className="mb-4 ">{productName}</h1>
          <p className="fs-5 text-muted mb-3">{prodcutDescription}</p>
          <div className="mb-4 ">
            <a
              href={learnMore}
              className="fs-5"
              style={{ textDecoration: "none", marginRight: "40px" }}
            >
              {learnMore} <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="col-lg-8 col-sm-6  text-center ">
          <img src={imgUrl} style={{ width: "80%" }}></img>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
