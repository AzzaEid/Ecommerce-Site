/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../../Components/Loader";
import axios from "axios";
import "./Items.css";
import SideFilter from "../../Components/SideFilter/SideFilter";
import lineBG from "../../assets/images/topographic-tile-11.png";
import { Flip, toast } from "react-toastify";
import CardProduct from "../../Components/CardProducts/CardProduct";
import Slider from "@mui/material/Slider";
import noProduct from "../../assets/images/noProduct.png"

const currency = "$";

function Items() {
  const { Cat_id } = useParams();
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState("");
  const [Item, setItems] = useState([]);
  const [Catname, SetCatname] = useState("");
  const [range, setRange] = useState([0, 300]);
  const [pageEmpty, setPageEmpty] = useState(false);
  const geItems = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API}/products/category/${Cat_id}`
      );
      console.log(data);
      //  console.log(data.categories);
      setItems(data.products);
      (Item.length == '0')?  setPageEmpty(true): setPageEmpty(false);
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
  function handleChanges(event, newValue) {
    setRange(newValue);
  }
  return (
    <div className="container">
      <div className="title-section  d-flex flex-wrap px-2 my-4 gap-3">
        <div
          className="card  px-5 py-4  rounded-4 col-6 "
          style={{
            background: ` url(${lineBG})`,
            backgroundColor: "rgb(244, 112, 95)",
            backgroundSize: "cover",
            color: "#ffffff",
            border: " 1px solid #F47069",
          }}
        >
          <h2 className="card-title "> {Catname}</h2>
        </div>
        <a
          className="btn align-self-end rounded-4 px-4"
          data-bs-toggle="offcanvas"
          href="#offcanvasExample"
          role="button"
          aria-controls="offcanvasExample"
        >
          Filter
        </a>
        {/**************** sidebar */}
        <div
          className="offcanvas offcanvas-start rounded-4 opacity-1"
          tabIndex={-1}
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel">
              Filter{" "}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body ">
            <div
              className=" rounded-4 p-3 my-1 side-filters p-4 d-flex flex-column gap-4 h-auto "
              style={{ backgroundColor: "#F3EFFA" }}
            >
              <div className="filter-header ">
                Price
                <div className="slidecontainer">
                <Slider value = {range} onChange = {handleChanges} valueLabelDisplay="auto"/>
         The selected range is {range[0]} - {range[1]}
                
                </div>
              </div>
              <div className="filter-header">
                Color
                <div className=" row gap-1 ">
                  <div
                    type="button"
                    className="btn btn-primary rounded-circle  spc-h "
                  >
                    {" "}
                  </div>
                  <div
                    type="button"
                    className="btn btn-secondary rounded-circle  spc-h"
                  >
                    {" "}
                  </div>
                  <div
                    type="button"
                    className="btn btn-success rounded-circle  spc-h"
                  ></div>
                  <div
                    type="button"
                    className="btn btn-danger rounded-circle  spc-h"
                  >
                    {" "}
                  </div>
                  <div
                    type="button"
                    className="btn btn-warning rounded-circle  spc-h"
                  ></div>
                  <div
                    type="button"
                    className="btn btn-info rounded-circle  spc-h"
                  ></div>
                  <div
                    type="button"
                    className="btn btn-light rounded-circle  spc-h"
                  ></div>
                  <div
                    type="button"
                    className="btn btn-dark rounded-circle  spc-h"
                  ></div>
                </div>
              </div>
            </div>
          </div>
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
      <div className=" p-4 m-auto rounded-4 mt-4 cards-area">
       <div className="row row-cols-1 row-cols-md-4 justify-content-flex-start card-grid">
          
       {(pageEmpty) ? 
            <img style={{width:"50%"}} src={noProduct}></img> 
            :
          Item.map((item) => (
          <CardProduct item={item} />
        ))
        }
       </div>
      
      </div>
      

    </div>
  );
}

export default Items;
