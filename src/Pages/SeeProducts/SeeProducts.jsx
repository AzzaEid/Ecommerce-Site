import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../../Components/Loader";
import axios from "axios";
import SideFilter from "../../Components/SideFilter/SideFilter";
import lineBG from "../../assets/images/topographic-tile-11.png";
import { Flip, toast } from "react-toastify";
import CardProduct from "../../Components/CardProduct";
import { ProductItems } from "../../context/ProductItems";

function SeeProducts() {
    const {getProducts,productsP} = useContext(ProductItems)


  useEffect(
    () => {
        getProducts();
    },
    []
  );

 
  return (
    <div className="container">
      <div className="row my-4">
        <SideFilter />
        <div className="endPage col-10">
          <div className="row row-cols-1 row-cols-md-4 justify-content-flex-start card-grid px-2 py-4 m-auto rounded-4 mt-4">
            {productsP.map((item) => (
              // eslint-disable-next-line react/jsx-key
              <CardProduct item={item} />
            ))}
          </div>
          </div>
        </div>
      </div>
  
  );
}

export default SeeProducts;
