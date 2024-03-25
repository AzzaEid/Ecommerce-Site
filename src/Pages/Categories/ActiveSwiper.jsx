import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "./Active.css";
import { Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const ServiceDataa = [
    {
        _id: "656afd2a5f24a07ecd5a5090",
        name: "men's fashion",
        image: {
            secure_url:
                "https://res.cloudinary.com/dbcwhbekq/image/upload/v1701511023/tshop/categories/zfh7vcn1zswyvkzrdqwg.webp",
            public_id: "tshop/categories/zfh7vcn1zswyvkzrdqwg",
        },
        id: "656afd2a5f24a07ecd5a5090",
    },
    {
        _id: "656b5ceb7ef25cbb5771636f",
        name: "women's fashion",
        image: {
            secure_url:
                "https://res.cloudinary.com/dbcwhbekq/image/upload/v1701534955/tshop/categories/tveblh4ux1yrynezlc1j.webp",
            public_id: "tshop/categories/tveblh4ux1yrynezlc1j",
        },
        id: "656b5ceb7ef25cbb5771636f",
    },
    {
        _id: "656b5cc47ef25cbb5771636b",
        name: "appliances",
        image: {
            secure_url:
                "https://res.cloudinary.com/dbcwhbekq/image/upload/v1701534915/tshop/categories/aqk1ge1xe5ux2mvhvkh5.webp",
            public_id: "tshop/categories/aqk1ge1xe5ux2mvhvkh5",
        },
        id: "656b5cc47ef25cbb5771636b",
    },

    {
        _id: "656b5cf97ef25cbb57716373",
        name: "mobiles",
        image: {
            secure_url:
                "https://res.cloudinary.com/dbcwhbekq/image/upload/v1701534969/tshop/categories/asypis0k0eytvvo0ynrn.webp",
            public_id: "tshop/categories/asypis0k0eytvvo0ynrn",
        },
        id: "656b5cf97ef25cbb57716373",
    },
    {
        _id: "656b5d0c7ef25cbb5771637a",
        name: "electronics",
        image: {
            secure_url:
                "https://res.cloudinary.com/dbcwhbekq/image/upload/v1701534987/tshop/categories/wgcgtxozlxonqcl2qutm.webp",
            public_id: "tshop/categories/wgcgtxozlxonqcl2qutm",
        },
        id: "656b5d0c7ef25cbb5771637a",
    },
    {
        _id: "656b5d1c7ef25cbb5771638a",
        name: "laptops & accessories",
        image: {
            secure_url:
                "https://res.cloudinary.com/dbcwhbekq/image/upload/v1701535003/tshop/categories/t67cltdek2jsxpevidfq.webp",
            public_id: "tshop/categories/t67cltdek2jsxpevidfq",
        },
        id: "656b5d1c7ef25cbb5771638a",
    },
    {
        _id: "656b5d2e7ef25cbb57716392",
        name: "home & kitchen",
        image: {
            secure_url:
                "https://res.cloudinary.com/dbcwhbekq/image/upload/v1701535022/tshop/categories/rmikrw6rtyyn9nht3ff8.webp",
            public_id: "tshop/categories/rmikrw6rtyyn9nht3ff8",
        },
        id: "656b5d2e7ef25cbb57716392",
    },
    {
        _id: "656b5d3f7ef25cbb57716396",
        name: "fragrances",
        image: {
            secure_url:
                "https://res.cloudinary.com/dbcwhbekq/image/upload/v1701535039/tshop/categories/ybis14kgiffajfrz6lsg.webp",
            public_id: "tshop/categories/ybis14kgiffajfrz6lsg",
        },
        id: "656b5d3f7ef25cbb57716396",
    },
    {
        _id: "656b5d4f7ef25cbb577163a0",
        name: "beauty",
        image: {
            secure_url:
                "https://res.cloudinary.com/dbcwhbekq/image/upload/v1701535055/tshop/categories/rkxhgia6qjhdoptep2rm.webp",
            public_id: "tshop/categories/rkxhgia6qjhdoptep2rm",
        },
        id: "656b5d4f7ef25cbb577163a0",
    },
];

function ActiveSwiper() {
    return (
        <div className="Catsection">
            <h2>We've provided you with everything you need!</h2>
            <div className="container">
                <div className="flex items-center justify-center flex-col h-[900px] bg-[#6c34af] slide-container ">
                    <Swiper
                        cssMode={true}
                        navigation={true}
                        // pagination={true}
                        mousewheel={true}
                        keyboard={true}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                        className="mySwiper"
                        breakpoints={{
                            340: {
                                slidesPerView: 2,
                                spaceBetween: 15,
                            },
                            700: {
                                slidesPerView: 4,
                                spaceBetween: 25,
                            },
                        }}
                        freeMode={true}
                        pagination={{
                            dynamicBullets: true,
                        }}
                    >
                        <div className="cards " style={{ margin: "0px 30px" }}>
                            {ServiceDataa.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className="card card-style border-0">
                                        <div className="z-1 position-relative">
                                            <img
                                                src={item.image.secure_url}
                                                className="card-img-top"
                                                alt="Slide 2"
                                                style={{ objectFit: "cover" }}
                                            />
                                        </div>

                                        <div className="card-body z-3 position-absolute sticky-bottom title ">
                                            <h3 className="card-title text-uppercase">{item.name}</h3>
                                            <Link className="nav-link active link-style pt-1" style={{ backgroundColor: "rgb(237, 51, 96)", width: "100%", borderBottomLeftRadius: "7px", borderBottomRightRadius: "7px" }} aria-current="page" to="/Products"> <p> Take a look </p> </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </div>
                    </Swiper>
                </div>
            </div>
            {/**search */}
            <div className="py-4">
                <h2>Find Your BEST</h2>
                <div className="input-group mb-3 m-auto py-1" style={{ width: "60%" }}>

                    <input
                        type="text"
                        className="form-control "
                        placeholder="search what you want"
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                    />
                    <button
                        className="btn btn-outline-secondary "
                        type="button"
                        id="button-addon2"
                        style={{ backgroundColor: "#8757F2" }}
                    >
                        <svg style={{ color: 'white' }} xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 512 512"><title>ionicons-v5-f</title><path d="M464,428,339.92,303.9a160.48,160.48,0,0,0,30.72-94.58C370.64,120.37,298.27,48,209.32,48S48,120.37,48,209.32s72.37,161.32,161.32,161.32a160.48,160.48,0,0,0,94.58-30.72L428,464ZM209.32,319.69A110.38,110.38,0,1,1,319.69,209.32,110.5,110.5,0,0,1,209.32,319.69Z" fill="white" /></svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

//<div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer"  style={{ backgroundImage: `url("https://mdbcdn.b-cdn.net/img/new/slides/041.webp")`, backgroundAttachment:"fixed"}}>
//                            <div
//                              className="absolute inset-0 bg-cover bg-center"
//                             style={{ backgroundImage: `url("https://res.cloudinary.com/dbcwhbekq/image/upload/v1701511023/tshop/categories/zfh7vcn1zswyvkzrdqwg.webp")`}}
//                          />
//                           <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
//                           <div className="relative flex flex-col gap-3">
//                               {/*<item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" />*/}
//                              <h1 className="text-xl lg:text-2xl">{item.name} </h1>
//                          </div>
//                           {/*  <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />  */}
//                   </div>

export default ActiveSwiper;
