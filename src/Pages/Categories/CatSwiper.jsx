import axios from "axios";
import Loader from "../../Components/Loader";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "./CatSwiper.css";
import "swiper/css/navigation";

import { Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function CatSwiper() {
  const [loader, setLoader] = useState(true);
  const [error, setEroor] = useState("");
  const [Categories, setCategories] = useState([]);
  const geCategories = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API}/categories/active?page=1&limit=8`
      );
      setCategories(data.categories);
      setLoader(false);
    } catch (error) {
      setEroor("ERROR AT DATA LOADING 😢");
      setLoader(false);
    }
  };
  useEffect(() => {
    geCategories();
  }, []);
  if (loader) {
    return <Loader />;
  }
  return (
    <div className="catsection">
      

      
      <div className="container">
<h2 className="rounded-4"> We've provided you with everything you need!</h2>
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

        <div className="flex items-center justify-center flex-col h-[900px] bg-[#6c34af] slide-container pb-5">
          <Swiper
            cssMode={true}
            navigation={true}
            // pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
            breakpoints={{
              400: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1000: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              790: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              
            }}
            freeMode={true}
            pagination={{
              dynamicBullets: true,
            }}
          >
            <div className="cards" style={{ margin: "0px 30px" }}>
              {Categories.map((item) => (
                <SwiperSlide key={item.id}>
                  <div
                    className="card h-100 shadow card-style px-0 pt-2 h-100"
                    style={{ border: "2px solid #297CFE"}}
                  >
                    <div className="z-1 position-relative">
                      <img
                        src={item.image.secure_url}
                        className="card-img-top cat-img"
                        alt="Slide 2"
                        style={{ objectFit: "cover" }}
                      />
                    </div>

                    <div className="card-body z-3 position-absolute sticky-bottom title rounded-4">
                      <h5 className="card-title text-uppercase">{item.name}</h5>
                      <Link
                        className="nav-link active link-style "
                        style={{
                          backgroundColor: "#297CFE",
                          width: "100%",
                          borderBottomLeftRadius: "15px",
                          borderBottomRightRadius: "15px",
                        }}
                      
                        aria-current="page"
                        to= {`/Items/${item.id}`}
                      >
                        <p>Take a look</p>
                        </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>

     
    </div>
  );
}
export default CatSwiper;
