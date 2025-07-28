import React from "react";
import { Link } from "react-router-dom";

export default function () {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
            <Link className="nav-link " aria-current="page" to = {'/'}>
                Home
            </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link className="nav-link" to = {'about'}>
                About
              </Link>
              <Link className="nav-link" to = {'Contact'}>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
