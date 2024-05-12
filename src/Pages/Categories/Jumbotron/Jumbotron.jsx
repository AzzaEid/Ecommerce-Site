import React from "react";
import "./Jumbotron.css";
import abttimg from "../../../assets/images/ecommrveiw-08.png";
import logo1Light from "../../../assets/images/logo1Dark.png";
import bag from "../../../assets/images/bag-09.png";
import viewImg from "../../../assets/images/ecommbegan-11.png";
import viewbg from "../../../assets/images/ecomminterbg-10.png";
export default function Jumbotron() {
  return (
    <div className=" text-center v-spc all half-background mb-2  d-flex flex-column align-items-center pb-5 pt-4">
    
        <div
          className="card view-card p-2 m-auto rounded-4 bg "
          style={{
            backgroundImage: `url(${viewbg})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            color: "white",
          }}
        >
          <div className="row g-0 d-flex  justify-content-center     align-items-center ">
            <div className="col-md-6" style={{minWidth:"370px"}}>
              <img
                src={viewImg}
                className="img-fluid rounded-start"
                alt="..."
                style={{ width: "90%" }}
              />
            </div>
            <div className="col-md-5 .ms-md-auto   d-flex flex-column justify-content-center align-items-center ">
              <div className="card-body d-flex flex-column gap-3  ">
                <h1 className="card-title  shopTitle font-size-adjust: 0.6;">
                  GhazelleMart{" "}
                  <img
                    src={logo1Light}
                    alt="Logo"
                    width={110}
                    className="d-inline-block align-text-center logo"
                  />
                </h1>
                <div
                  className="row"
                  style={{ justifyContent: "space-between" }}
                >
                  <p className="card-text view-text pb-3">
                    Style Everything:
                    <br /> Fashion Forward
                    <br /> Home Ready
                    <br /> and Tech Savvy!
                  </p>
                  {/*    <img src={bag} alt="" style={{height:"150px",width:"140px"}}/>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
    
    </div>
  );
}
//"linear-gradient(306deg, rgba(105,37,176,1) 50%, rgba(156,127,217,1) 100%) "
