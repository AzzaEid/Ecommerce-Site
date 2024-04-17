import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import { CartContext } from "../context/CartContextProvider";

// eslint-disable-next-line react/prop-types
function CardProduct({ item }) {
    const {addToCart,loding}=useContext(CartContext)
  return (
    // eslint-disable-next-line react/prop-types
    <div className="col d-flex p-2 align-self-stretch   row-cols-md-1 " style={{ height: "100%" }} key={item._id}>
      <div className="card h-100 p-1 rounded-4">
        <Link aria-current="page" to={`/Product/${item.id}`}>
          <img
            src={item.mainImage.secure_url}
            className="card-img-top product-image  rounded-4 "
            alt="..."
          />
        </Link>
        <div className="card-body  d-flex flex-column   justify-content-space-between pt-1  ">
          <div>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              {item.name}
            </h6>
            <h5 className="card-title ">{item.price}$</h5>
          </div>

          <div className="row  gap-1">
            <div
              className="p-2  btn  d-flex flex-grow-1 align-items-center  justify-content-center"
              style={{
                width: "fit-content",
                color: "white",
                backgroundColor: "#6F50C8",
              }}
              onClick={()=> {
                addToCart(item._id)
              }}
            >
              <img
                width={30}
                height={30}
                src="https://img.icons8.com/external-sbts2018-solid-sbts2018/58/ffffff/external-shopping-cart-black-friday-5-sbts2018-solid-sbts2018.png"
                alt="external-shopping-cart-black-friday-5-sbts2018-solid-sbts2018"
              />
              <p
                className="card-text "
                style={{ width: "fit-content", color: "white" }}
                
              >
               {loding? <Loader/> : "ADD TO CART"}
      </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
/* رمز اللايك يضاف لاحقا
    <div
            className="p-2 rounded-circle border border-1"
            style={{ width: "fit-content" }}
          >
            <svg
              style={{ color: "rgb(235, 30, 119)", height: "30px" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
            >
              
              <path
                d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
                fill="#F47069"
              />
            </svg>
          </div>
          */
