import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-sm-top  ">
      <div className="container p-2 ">
        <Link className="navbar-brand" to="/">
          <img src="media/images/logo.svg" style={{ width: "25%" }}></img>
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <Link
                className="nav-link active  mx-3 fs-5 text-muted"
                aria-current="page"
                to="/signup"
              >
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active  mx-3   fs-5 text-muted"
                aria-current="page"
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active  mx-3   fs-5 text-muted"
                aria-current="page"
                to="products"
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active  mx-3   fs-5 text-muted"
                aria-current="page"
                to="pricing"
              >
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active mx-3   fs-5 text-muted"
                aria-current="page"
                to="support"
              >
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
