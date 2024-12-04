import React from "react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <h2 className="not-found-subtitle">Page Not Found</h2>
      <p className="not-found-text">
        The page you are looking for doesn’t exist or has been moved.
      </p>
      <a href="/" className="not-found-link">
        Go Back Home
      </a>
    </div>
  );
};

export default NotFound;
