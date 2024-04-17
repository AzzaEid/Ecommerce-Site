import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../../Components/Loader";
import axios from "axios";
import "./Items.css";
import SideFilter from "../../Components/SideFilter/SideFilter";
import lineBG from "../../assets/images/topographic-tile-11.png";
import { Flip, toast } from "react-toastify";
import CardProduct from "../../Components/CardProduct";
const currency = "$";

function Items() {
   
  const { Cat_id } = useParams();
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState("");
  const [Item, setItems] = useState([]);
  const [Catname, SetCatname] = useState("");

  const geItems = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API}/products/category/${Cat_id}`
      );
      console.log(data);
      //  console.log(data.categories);
      setItems(data.products);
      setLoader(false);
    } catch (error) {
      setError("ERROR AT DATA LOADING 😢");
      setLoader(false);
    }
  };
  const getCatTitle = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API}/categories/${Cat_id}`
    );
    console.log(data.category.name);
    SetCatname(data.category.name);
  };

  useEffect(
    () => {
      geItems();
      getCatTitle();
    },
    [Cat_id],
    ""
  );
  if (loader) {
    return <Loader />;
  }
  /*
  const addToCart =async (productId) =>{
    if(userToken!=null){
       const token = localStorage.getItem('userToken');
    const {data} = await axios.post(`${import.meta.env.VITE_API}/3000/cart`,
    {productId},
    {headers:{
      Authorization:`Tariq__${token}`
    }}
     )
    }else{
      toast.error("Please login first 😊" ,{
        position: "bottom-left",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Flip,
      }); 
    }
  };
  */
  return (
    <div className="container">
      <div className="row my-4">
        <SideFilter />
        <div className="endPage col-10">
          <div className="title-section  px-2">
            <div
              className="card  px-5 py-4  rounded-4 col-6 "
              style={{
                background: ` url(${lineBG})`,
                backgroundColor: "#f47066bc",
                backgroundSize: "cover",
                color: "#ffffff",
                border: " 1px solid #F47069",
              }}
            >
              <h2 className="card-title "> {Catname}</h2>
            </div>
          </div>

          {error ? (
            <h4
              className="p-2"
              style={{
                backgroundColor: "rgb(237, 51, 96)",
                textAlign: "center",
                color: "white",
              }}
            >
              {error}
            </h4>
          ) : null}
          <div className="row row-cols-1 row-cols-md-4 justify-content-flex-start card-grid px-2 py-4 m-auto rounded-4 mt-4">
            {Item.map((item) => (
              <CardProduct item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Items;
