import React from "react";
import delivery from "../../assets/images/icon-delivery.png";
import service from '../../assets/images/Icon-Customer-service.png'
import secure from '../../assets/images/Icon-secure.png'
function CustomerServies() {
  return (
    <div className="container card-group w-75 gap-5 py-5 my-3">
      <div className="card border-0 mx-3 flex-wrap align-items-center align-content-center ">
        <div
          className="p-2 rounded-circle"
          style={{
            backgroundColor: "#297CFE",
            border: " 11px solid #E7ECFF",
            width: "fit-content",
          }}
        >
          <img
            className=" card-img-top"
            src={delivery}
            style={{ height: "80px", width: "80px" }}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">FREE AND FAST DELIVERY</h5>
          <p className="card-text">Free delivery for all orders over $140</p>
        </div>
      </div>
      <div className="card border-0 mx-3 flex-wrap align-items-center align-content-center ">
        <div
          className="p-2 rounded-circle"
          style={{
            backgroundColor: "#297CFE",
            border: " 11px solid #E7ECFF",
            width: "fit-content",
          }}
        >
          <img
            className=" card-img-top"
            src={service}
            style={{ height: "80px", width: "80px" }}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">F24/7 CUSTOMER SERVICE</h5>
          <p className="card-text">Friendly 24/7 customer support</p>
        </div>
      </div>
      <div className="card border-0 mx-3 flex-wrap align-items-center align-content-center ">
        <div
          className="p-2 rounded-circle"
          style={{
            backgroundColor: "#297CFE",
            border: " 11px solid #E7ECFF",
            width: "fit-content",
          }}
        >
          <img
            className=" card-img-top"
            src={secure}
            style={{ height: "80px", width: "80px" }}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">MONEY BACK GUARANTEE</h5>
          <p className="card-text">We reurn money within 30 days</p>
        </div>
      </div>
     
     
    </div>
  );
}

export default CustomerServies;
