import React from "react";
import { Link } from "react-router-dom";
import error404 from "../assets/image/daily-ui-24-error-404-large.png";
import { Helmet } from "react-helmet-async";
import Nav from "../layout/header/nav";

const NotFound = () => {
  return (
    <section>
      <Helmet>
        <title>M Venkata Ratnam Law Firm | 404 Error Page</title>
        <meta name="description" content="Page not found" />
      </Helmet>
      <Nav />
      <div className="error404">
        <div className="img">
          <img
            src={error404}
            alt="404 error"
            style={{ width: "100%", height: "100%", borderRadius: "1rem" }}
          />
        </div>
        <p className="text">
          Go back to{" "}
          <Link to="/" className="link">
            homepage
          </Link>
        </p>
      </div>
    </section>
  );
};

export default NotFound;
