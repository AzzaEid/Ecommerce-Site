import React from "react";
import { Link } from "react-router-dom";
import logoDark from "../assets/images/logo1Dark.png";
function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg  sticky-md-top align-items-center"
        style={{ backgroundColor: "#D0D4F0" }}
      >
        <div className="container">
          <Link
            className="navbar-brand text-center"
            href="#"
            style={{ color: "#8757F2", fontFamily: "Abril Fatface" }}
            aria-current="page"
            to="/"
          >
            <img
              src={logoDark}
              alt="Logo"
              width={40}
              className="d-inline-block align-text-center"
            />
            GhazelleMart
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0 pages">
              <li>
                <img
                  width={30}
                  height={30}
                  src="https://img.icons8.com/external-sbts2018-solid-sbts2018/58/F25081/external-shopping-cart-black-friday-5-sbts2018-solid-sbts2018.png"
                  alt="external-shopping-cart-black-friday-5-sbts2018-solid-sbts2018"
                />
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-disabled="true" to="/Cart">
                  Cart
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Categorirs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Products">
                  Products
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav  mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active btn btn-primary me-md-2 "
                  aria-current="page"
                  to="/Login"
                  style={{ backgroundColor: "#ed3360", color: "white" }}
                >
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-disabled="true" to="/Register">
                  Sin in
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
