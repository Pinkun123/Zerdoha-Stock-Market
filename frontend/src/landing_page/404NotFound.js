import React from "react";

function NotFound() {
  return (
    <div className="container">
      <div className="row vh-100 d-flex align-items-center justify-content-center">
        <div className="col-md-6 text-center">
          <h1 className="display-1 fw-bold">404</h1>
          <h2 className="display-4 mb-3">Page Not Found</h2>
          <p className="lead text-muted mb-4">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <a href="/" className="btn btn-primary">
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
