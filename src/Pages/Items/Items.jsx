import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../../Components/Loader";
import axios from "axios";
import "./Items.css";
import SideFilter from "../../Components/SideFilter/SideFilter";
import lineBG from '../../assets/images/topographic-tile-11.png'
import { Flip, toast } from "react-toastify";
import AddToCart from "../../Components/AddToCart";
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
    [],
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
                background:
                 ` url(${lineBG})`,
                 backgroundColor:"#f47066bc" ,
                 backgroundSize:"cover",
                color: "#ffffff",
                border:" 1px solid #F47069"
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
              <div className="col" key={item._id}>
             
                <div className="card h-100 p-1">
                    <Link aria-current="page" to= {`/Product/${item.id}`} >
                  <img
                    src={item.mainImage.secure_url}
                    className="card-img-top product-image  rounded-4 "
                    alt="..."
                  />
</Link> 
                  <div className="card-body  d-flex flex-column   justify-content-space-around pt-1  ">
                  <h7 className="card-subtitle mb-2 text-body-secondary">
                      {item.name}
                    </h7>
                    <h5 className="card-title ">
                      {item.price}
                      {currency}
                    </h5>
                   

                    <div className="row sticky-bottom gap-1">
                      <div
                        className="p-2  btn  d-flex flex-grow-1 align-items-center  justify-content-center"
                        style={{ width: "fit-content", color: "white",backgroundColor:"#6F50C8" }}
                        onClick={<AddToCart productId ={item._id}/>}
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
                          {" "}
                          ADD TO CART{" "}
                        </p>
                      </div>
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
                    </div>
                  </div>
                </div>
              
               
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Items;
