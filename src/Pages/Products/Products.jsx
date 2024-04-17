import React, { useContext, useEffect, useState } from 'react'
import Loader from '../../Components/Loader';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SideFilter from '../../Components/SideFilter/SideFilter';
import CardProduct from '../../Components/CardProduct';
import { Swiper,SwiperSlide } from 'swiper/react';
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { ProductItems } from '../../context/ProductItems';

function Products() {
  const {setProductsLink}=useContext(ProductItems);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState("");
  const [Catname, SetCatname] = useState("");

  const [newProducts, setnewProducts] = useState([]);  
  const [discount, setDiscount] = useState([]);  
  const [topSales, setTopSales] = useState([]); 
  const [foru, setForu] = useState([]); 
  /*
  const geItems = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API}/products?page=1&limit=10`
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
  */

///////////////new At Mart
///?page=1&limit=10&&sort=-updatedAt
const getNew = async () => {
  try {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API}/products?page=1&limit=6&&sort=-updatedAt`
    );
    console.log(data);
    //  console.log(data.categories);
    setnewProducts(data.products);
    setLoader(false);
  } catch (error) {
    setError("ERROR AT DATA LOADING 😢");
    setLoader(false);
  }
};
//////////////discount  
const getDiscount = async () => {
  try {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API}/products?page=1&limit=7&&sort=-discount`
    );
    console.log(data);
    //  console.log(data.categories);
    setDiscount(data.products);
    setLoader(false);
  } catch (error) {
    setError("ERROR AT DATA LOADING 😢");
    setLoader(false);
  }
};
/////////trending
const getTopSales = async () => {
  try {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API}/products?page=1&limit=7&&sort=-number_sellers`
    );
    console.log(data);
    //  console.log(data.categories);
    setTopSales(data.products);
    setLoader(false);
  } catch (error) {
    setError("ERROR AT DATA LOADING 😢");
    setLoader(false);
  }
};
/////////////for you
const geForU = async () => {
  try {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API}/products?page=1&limit=7&&sort=-price`
    );
    console.log(data);
    //  console.log(data.categories);
    setForu(data.products);
    setLoader(false);
  } catch (error) {
    setError("ERROR AT DATA LOADING 😢");
    setLoader(false);
  }
};


  useEffect(
    () => {
     // geItems();
      getNew();
      getDiscount();
      getTopSales();
      geForU();
    },
    [],[],[],[]);
  if (loader) {
    return <Loader />;
  }
  function seeProducts(target){
    if (target =="trend")
    setProductsLink("/products?page=1&limit=12&&sort=-number_sellers");
  else if(target =="discount")
  setProductsLink("/products?page=1&limit=12&&sort=-discount");
else if (target=="new-items")
setProductsLink("/products?page=1&limit=12&&sort=-updatedAt");
else if(target =="forU")
setProductsLink("/products?page=1&limit=12&&sort=price");
  }
  return (
    <div className="container ">
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
      <section className='topProdSec p-4 mt-0  rounded-bottom-4 ' style={{backgroundColor:"#F3EFFA"}}>
        <h2 className='text-center pt-3'>Discover Our Products</h2>
        <div className='d-flex justify-content-center gap-1 pt-3'>
        <a
           className="px-3 rounded-4 btn   "
              style={{
                width: "fit-content",
                color: "white",
                backgroundColor: "#F47069",
              }}
              href='#Trending'
              
              >
         Trending Products
        </a>
        <a
           className="px-3 rounded-4 btn   "
              style={{
                width: "fit-content",
                color: "white",
                backgroundColor: "#F47069",
              }}
              href='#Discount'
              
              >
         Discount
        </a>
        <a
           className="px-3 rounded-4 btn   "
              style={{
                width: "fit-content",
                color: "white",
                backgroundColor: "#F47069",
              }}
              href='#NewProducts'
              
              >
         New Products
        </a>
        <a
           className="px-3 rounded-4 btn   "
              style={{
                width: "fit-content",
                color: "white",
                backgroundColor: "#F47069",
              }}
              href='#ForU'
              
              >
         For You
        </a>
        
        </div>
        {/**btns for srctions */}
      </section>
      <section className='Trending py-5' id='Trending'>
      <h3 className='text-center'>Trend Products</h3>
      <div className="flex    bg-[#6c34af] slide-container py-3 px-3 ">
          <Swiper
            cssMode={true}
            navigation={true}
            // pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Mousewheel, Keyboard]}
            className="mySwiper"
            breakpoints={{
              340: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              700: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}
            freeMode={true}
            
          >
            <div className="cards" style={{ margin: "0px 30px" }}>
              {topSales.map((item) => (
                <SwiperSlide key={item.id} className='h-100'>
                    <CardProduct item={item}/>
                 </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
        <div className='p-3 d-flex  align-items-center  justify-content-center'>

        <Link
           className="px-3 rounded-4 btn   "
              style={{
                width: "fit-content",
                color: "white",
                backgroundColor: "#F47069",
              }}
              onClick={()=> {seeProducts("trend")
              }}
              aria-current="page"
              to= {`/SeeProducts`}
              
              >
        SEE MORE
        </Link>
             
            </div>
      </section>
      <section className='Discoubt py-5 rounded-4'id='Discount' style={{backgroundColor:"#F3EFFA"}}>
      <h3 className='text-center'>Discount </h3>
      <div className="flex    bg-[#6c34af] slide-container py-3 px-3 ">
          <Swiper
            cssMode={true}
            navigation={true}
            // pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Mousewheel, Keyboard]}
            className="mySwiper"
            breakpoints={{
              340: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              700: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}
            freeMode={true}
            
          >
            <div className="cards" style={{ margin: "0px 30px" }}>
              {discount.map((item) => (
                <SwiperSlide key={item.id} className='h-100'>
                    <CardProduct item={item}/>
                 </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
        <div className='p-3 d-flex  align-items-center  justify-content-center'>

        <Link
           className="px-3 rounded-4 btn   "
              style={{
                width: "fit-content",
                color: "white",
                backgroundColor: "#F47069",
              }}
              onClick={()=> {seeProducts("discount")
              }}
              aria-current="page"
              to= {`/SeeProducts`}
              
              >
        SEE MORE
        </Link>
             
            </div>
      </section>
      <section className='NewProducts py-5 rounded-4' id='NewProducts' >
      <h3 className='text-center'>NEW PRODUCTS </h3>
      <div className="flex    bg-[#6c34af] slide-container py-3 px-3 ">
          <Swiper
            cssMode={true}
            navigation={true}
            // pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Mousewheel, Keyboard]}
            className="mySwiper"
            breakpoints={{
              340: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              700: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}
            freeMode={true}
            
          >
            <div className="cards" style={{ margin: "0px 30px" }}>
              {newProducts.map((item) => (
                <SwiperSlide key={item.id} className='h-100'>
                    <CardProduct item={item}/>
                 </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
        <div className='p-3 d-flex  align-items-center  justify-content-center'>

        <Link
           className="px-3 rounded-4 btn   "
              style={{
                width: "fit-content",
                color: "white",
                backgroundColor: "#F47069",
              }}
              onClick={()=> {seeProducts("new-items")
              }}
              aria-current="page"
              to= {`/SeeProducts`}
              
              >
        SEE MORE
        </Link>
             
            </div>
      </section>
      <section className='ForU py-5 rounded-4' id='ForU' style={{backgroundColor:"#F3EFFA"}}>
      <h3 className='text-center'>For You </h3>
      <div className="flex    bg-[#6c34af] slide-container py-3 px-3 ">
          <Swiper
            cssMode={true}
            navigation={true}
            // pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Mousewheel, Keyboard]}
            className="mySwiper"
            breakpoints={{
              340: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              700: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}
            freeMode={true}
            
          >
            <div className="cards row-cols-1  row-cols-md-4  card-grid" style={{ margin: "0px 30px" }}>
              {foru.map((item) => (
                <SwiperSlide key={item.id} className='h-100'>
                    <CardProduct item={item}/>
                 </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
        <div className='p-3 d-flex  align-items-center  justify-content-center'>

        <Link
           className="px-3 rounded-4 btn   "
              style={{
                width: "fit-content",
                color: "white",
                backgroundColor: "#F47069",
              }}
              onClick={()=> {seeProducts("forU")
              }}
              aria-current="page"
              to= {`/SeeProducts`}
              
              >
        SEE MORE
        </Link>
             
            </div>
      </section>

        </div>
 

  )
}

export default Products