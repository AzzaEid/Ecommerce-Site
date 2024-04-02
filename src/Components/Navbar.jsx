import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoDark from "../assets/images/logo1Light.png";
import { UserContext } from "../context/UserContextProvider";
import './nav.css';
function Navbar() {
  const {userName,setUserName,setUserToken} = useContext(UserContext);
  const navigate = useNavigate();
 
  return (
    <>
      <nav
        className="navbar navbar-expand-lg  sticky-md-top align-items-center"
        style={{ backgroundColor: "#6F50C8", color:"#F3EFFA"}}
      >
        <div className="container">
          <Link
            className="navbar-brand text-center link-cl"
            href="#"
            style={{ color: "white", fontFamily: "Abril Fatface" }}
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
                  src="https://img.icons8.com/external-sbts2018-solid-sbts2018/58/F47069/external-shopping-cart-black-friday-5-sbts2018-solid-sbts2018.png"
                  alt="external-shopping-cart-black-friday-5-sbts2018-solid-sbts2018"
                />
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-disabled="true" to="/Cart"  style={{  color: "#F3EFFA" }}>
                  Cart
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/" style={{  color: "#F3EFFA" }}>
                  Categorirs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Products" style={{  color: "#F3EFFA" }}>
                  Products
                </Link>
              </li>
            </ul>
            {userName?
            <>
            
              <ul className="navbar-nav  mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active btn btn-primary me-md-2 " 
                  aria-current="page"
                  to="/Profile"
                  style={{ backgroundColor: "#F47069", color: "white" }}
                >
                {userName}
                </Link>
              </li>
             
            </ul>
            </>
          :
          <><ul className="navbar-nav  mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active btn btn-primary me-md-2 " 
                  aria-current="page"
                  to="/Login"
                  style={{ backgroundColor: "#F47069", color: "white" }}
                >
                  Login
                </Link>
              </li>
             
            </ul>
          </>}
            
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
