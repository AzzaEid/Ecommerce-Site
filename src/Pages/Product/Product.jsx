import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../Components/Loader";
import RateStar from "../../Components/RateStar";
import { FaStar } from "react-icons/fa";
import { CartContext } from "../../context/CartContextProvider";



export default function Product() {
  const { id } = useParams();
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState("");
  const [product, setProduct] = useState([]);
  const [avgRating, setAvgRating] = useState(0);
  const {addToCart,loding}=useContext(CartContext);
  const geProduct = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API}/products/${id}`
      );
      console.log(data);
      //  console.log(data.categories);
      setAvgRating(data.avgRating);
      setProduct(data.product);
      setLoader(false);
      
      console.log(data.product.subImages.rating);
    } catch (error) {
      setError("ERROR AT DATA LOADING 😢");
      setLoader(false);
    }
  };
  useEffect(() => {
    geProduct();
  }, []);
  if (loader) {
    return <Loader />;
  }

  return (
    <div className="container">
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
      <section>
        <div className="card my-5 m-auto" style={{ maxWidth: "75%" }}>
          <div className="row g-0">
            <div className="col-md-4">
              {" "}
              {/**             */}
              <div
                id="carouselExampleInterval"
                className="carousel slide"
                data-bs-ride="carousel"
              >
               <div className="carousel-inner">
                  {product.subImages.map((image) => (
                    <div className="carousel-item  active " key={image} data-bs-interval={10000}>
                      <img
                        src={image.secure_url}
                        className="d-block w-100"
                      />
                      {/*console.log(image.secure_url)*/}
                    </div>
                  ))}
                   
                 
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleInterval"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleInterval"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              {/* <img src={product.subImages[0].secure_url} className="img-fluid rounded-start" alt="..." />*/}
            </div>
            <div className="col-md-8">
              <div className="card-body" style={{ color: "#6F50C8" }}>
                <h5 className="card-title">{product.name}</h5>
                <p className="text-body-secondary" style={{ color: "#F3EFFA" }}>
                  {product.description}
                </p>
                <div className="d-flex my-2" style={{ backgroundColor: "#F3EFFA" }}>
                <p
                  className="card-title d-flex flex-grow-1 "
                  
                >
                  {product.price}$
                </p>
                <p className="text-body-secondary" style={{ color: "#F3EFFA" }}>
                  {avgRating.toFixed(2)} ⭐
                </p>  
                </div>
                
                <div
                        className="p-2  btn btn-outline-light d-flex flex-grow-1 align-items-center gap-1  justify-content-center"
                        style={{ width: "fit-content", color: "white" ,backgroundColor:"#6F50C8"}}
                        onClick={()=> {
                          addToCart(product._id)
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
                        {loding? "loding.." : "ADD TO CART"}
                        </p>
                      </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="rounded-3" style={{ backgroundColor: "#F3EFFA" }}>
        <div className="top p-3">
          <h2> Reviewes</h2>
        </div>

        <div className="p-3">
          {product.reviews.map(rev => (
        <div className="card border-secondary mb-2 " key={rev._id} style={{}}>
        <div className="card-header bg-transparent border-secondary d-flex justify-content-space-between">
          <p className="card-text flex ">{rev.createdBy.userName}</p>
          <span><small> </small>{product.updatedAt}</span>
        </div>
        <div className="card-body text-dark">
          
          <h5 className=" card-title">
         { rev.comment}
          </h5>
        </div>
        <div className="card-footer bg-transparent border-success">
         {rev.rating} ⭐
        {}
        </div>
      </div>
          ))}
       
        </div>
      </section>
      <section className="my-5">
      <RateStar product_id ={product._id} />

      </section>
    </div>
  );
}
