import axios from 'axios';
import React, { useContext } from 'react'
import { Flip, toast } from 'react-toastify';
import { UserContext } from '../context/UserContextProvider';

async function AddToCart ({productId}) {
    const {userToken} = useContext(UserContext);
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
  
}

export default AddToCart;