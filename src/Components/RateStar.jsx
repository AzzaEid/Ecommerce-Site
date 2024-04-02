import axios from "axios";
import React, { useContext } from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Flip, toast } from "react-toastify";
import { UserContext } from "../context/UserContextProvider";
//import './RateStar.module.css'
const colors = {
    orange: "#FFBA5A !important",
    grey: "#a9a9a9 !important"
    
};



function RateStar(product_id) {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const {userToken} = useContext(UserContext);
  const [review, setReview] = useState({
    comment :"",
    rating:0
  });
  const stars = Array(5).fill(0)

  const handleClick = value => {
    setCurrentValue(value);
    setReview({
      ...review,
      rating: value,
    });
  };

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  }

  const handelChange = (e) => {
    const { name, value } = e.target;
    setReview({
      ...review,
      [name]: value,
    });
    console.log(review);
  };
  ///////////////////////////////////////////////
  const handelSubbmet= async()=> {
    if(userToken!=null){
    try {
      const token = localStorage.getItem('userToken');
      const { data } = await axios.post(
        `${import.meta.env.VITE_API}/3000/products/${product_id}/review`,
        {
          comment: review.comment,
          rating: review.rating,
        },
        {headers:{
          Authorization:`Tariq__${token}`
        }}
      );
      console.log("post done");
      console.log(data.message);
      setReview({
        comment :"",
        rating:0
      });
      if (data.message == 'success') {
         console.log(data.message);
        console.log("success=========");
        toast.success("Commented SUCCESSFULLY !", {
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
      } } catch (error) {
        console.log(error.response.data.message);
          toast.error(error.response.data.message , {
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

  return (
    <div style={styles.container}>
      <h2> React Ratings </h2>
      <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
            className="icn"
              key={index}
              size={24}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? colors.orange  : colors.grey}
              style={{
                marginRight: 10,
                cursor: "pointer",
                
              }}
            />
          )
        })}
      </div>
      <textarea value={review.comment} name="comment"
      onChange={handelChange}
        placeholder="What's your experience?"
        style={styles.textarea}
      />

      <button onClick={handelSubbmet}
        style={styles.button}
      >
        Submit
      </button>
      
    </div>
  );
}


const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
    backgroundColor: "#F3EFFA"
  }

};




 
export default RateStar;
