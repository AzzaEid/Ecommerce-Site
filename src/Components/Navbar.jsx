import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoDark from "../assets/images/logo1Light.png";
import { UserContext } from "../context/UserContextProvider";
import { FaRegUser } from "react-icons/fa";
import { CartContext } from "../context/CartContextProvider";

function Navbar() {
  const { userName, setUserName, setUserToken } = useContext(UserContext);
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <>
      <nav
        className="navbar navbar-expand-lg  sticky-md-top align-items-center"
        style={{ backgroundColor: "#6F50C8", color: "#F3EFFA" }}
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
            <ul className="nav m-auto mb-2 mb-lg-0 pages nav-underline">
              <li className="nav-item ">
                <Link
                  className="nav-link "
                  aria-current="page"
                  to="/"
                  style={{ color: "#F3EFFA" }}
                  onMouseOver={({ target }) => (target.style.color = "pink")}
                  onMouseOut={({ target }) => (target.style.color = "#F3EFFA")}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/Products"
                  style={{ color: "#F3EFFA" }}
                  onMouseOver={({ target }) => (target.style.color = "pink")}
                  onMouseOut={({ target }) => (target.style.color = "#F3EFFA")}
                >
                  Products
                </Link>
              </li>
            </ul>
            <div className="nav ">
              <ul className="nav m-auto mb-2 mb-lg-0 pages nav-underline mx-3">
                <li className=" ">
                  <Link
                    className="nav-link position-relative"
                    aria-disabled="true"
                    to="/Cart"
                    style={{ color: "#F3EFFA" }}
                  >
                    <img
                      className="mx-1"
                      width={30}
                      height={30}
                      src="https://img.icons8.com/external-sbts2018-solid-sbts2018/58/F47069/external-shopping-cart-black-friday-5-sbts2018-solid-sbts2018.png"
                      alt="external-shopping-cart-black-friday-5-sbts2018-solid-sbts2018"
                    />
                    <span
                      className="position-absolute translate-middle py-0 px-1 text-bg-light border-light rounded-circle opacity-2"
                      style={{
                        top: "12px",
                        left: "10px",
                        color: "#F47069",
                        fontSize: "10px",
                      }}
                    >
                      {cart.length}
                    </span>
                    <span
                      className="visually-hidden"
                      style={{ color: "F47069" }}
                    >
                      New alerts
                    </span>
                    Cart
                  </Link>
                </li>
                <li>
                  <div className="input-container">
                    <input
                      type="text"
                      name="text"
                      className="input"
                      placeholder="Find Your BEST ! "
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill
                      viewBox="0 0 24 24"
                      className="icon"
                    >
                      <g strokeWidth={0} id="SVGRepo_bgCarrier" />
                      <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        id="SVGRepo_tracerCarrier"
                      />
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <rect fill="white" height={24} width={24} />{" "}
                        <path
                          fill
                          d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM9 11.5C9 10.1193 10.1193 9 11.5 9C12.8807 9 14 10.1193 14 11.5C14 12.8807 12.8807 14 11.5 14C10.1193 14 9 12.8807 9 11.5ZM11.5 7C9.01472 7 7 9.01472 7 11.5C7 13.9853 9.01472 16 11.5 16C12.3805 16 13.202 15.7471 13.8957 15.31L15.2929 16.7071C15.6834 17.0976 16.3166 17.0976 16.7071 16.7071C17.0976 16.3166 17.0976 15.6834 16.7071 15.2929L15.31 13.8957C15.7471 13.202 16 12.3805 16 11.5C16 9.01472 13.9853 7 11.5 7Z"
                          clipRule="evenodd"
                          fillRule="evenodd"
                        />{" "}
                      </g>
                    </svg>
                  </div>
                </li>
              </ul>
              {userName ? (
                <>
                  <ul className="navbar-nav  mb-lg-0">
                    <li className="nav-item">
                      <Link
                        className="nav-link active custom-button me-md-2 px-3 "
                        aria-current="page"
                        to="/Profile"
                        style={{ backgroundColor: "#F47069", color: "white" }}
                      >
                        <FaRegUser
                          fill="white"
                          style={{
                            width: "16px",
                            height: "16px",
                            marginRight: "5px",
                            color: "#fff",
                          }}
                        />
                        {userName}
                      </Link>
                    </li>
                  </ul>
                </>
              ) : (
                <>
                  <ul className="navbar-nav  mb-lg-0">
                    <li className="nav-item ">
                      <Link
                        className="nav-link active custom-button me-md-2 px-3"
                        aria-current="page"
                        to="/Login"
                        style={{ backgroundColor: "#F47069", color: "white" }}
                      >
                        Login
                      </Link>
                    </li>
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
