import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Loader from '../../Components/Loader';
import AddToCart from '../../Components/AddToCart';

function Cart() {
  const [loader, setLoader] = useState(true);
  const [CartI, setCartI] = useState([]);
  const [error, setError] = useState("");
const getCart = async () => {
  try {
    const token = localStorage.getItem('userToken');
    console.log("hi");
    const { data } = await axios.get(
      `${import.meta.env.VITE_API}/cart`,
      {headers:{
        Authorization:`Tariq__${token}`
      }}
    );
    console.log(data);
    //  console.log(data.categories);
    setCartI(data.products);
    setLoader(false);
  } catch (error) {
    console.log(error);
    setError("ERROR AT DATA LOADING 😢");
    setLoader(false);
  }

};
useEffect(
  () => {
    getCart();
   
  },[]
);
if (loader) {
  return <Loader />;
}
  return (
    <div className="endPage col-10">
   

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

  </div>
  )
}

export default Cart