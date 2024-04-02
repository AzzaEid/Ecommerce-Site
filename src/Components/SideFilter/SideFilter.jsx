import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
//import Rating from "../Rating.jsx";
import "./SideFilter.css"
function SideFilter() {

  return (
    <div
      className="col-2 rounded-4 p-3 my- side-filters p-4 d-flex flex-column gap-4 h-auto "
      style={{ backgroundColor: "#F3EFFA"}}
    >
        
      
      <div className="filter-header ">
        Price
       <div className="slidecontainer">
  <input type="range" min={1} max={100} defaultValue={50} className="slider" id="myRange" />
</div>

        </div>
      <div className="filter-header">
        Color
      <div className=" row gap-1 ">
       
            
<div type="button" className="btn btn-primary rounded-circle  spc-h "> </div>
  <div type="button" className="btn btn-secondary rounded-circle  spc-h"> </div>
  <div type="button" className="btn btn-success rounded-circle  spc-h"></div>
  <div type="button" className="btn btn-danger rounded-circle  spc-h"> </div>
  <div type="button" className="btn btn-warning rounded-circle  spc-h"></div>
  <div type="button" className="btn btn-info rounded-circle  spc-h"></div>
  <div type="button" className="btn btn-light rounded-circle  spc-h"></div>
  <div type="button" className="btn btn-dark rounded-circle  spc-h"></div>
            
      
</div>

      </div>
    </div>
  );
}

export default SideFilter;
