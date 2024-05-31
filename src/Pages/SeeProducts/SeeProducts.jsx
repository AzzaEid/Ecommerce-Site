import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../../Components/Loader";
import axios from "axios";
import SideFilter from "../../Components/SideFilter/SideFilter";
import lineBG from "../../assets/images/topographic-tile-11.png";
import { Flip, toast } from "react-toastify";
import { ProductItems } from "../../context/ProductItems";
import CardProduct from "../../Components/CardProducts/CardProduct";
import Slider from "@mui/material/Slider";
import noProduct from "../../assets/images/noProduct.png"
function SeeProducts() {
    const {getProducts,productsP,setProductsLink,currentPage,setCurrentPage,pageEmpty} = useContext(ProductItems)
    const [range, setRange] = useState([0, 100]);
    function changePage (page){
setCurrentPage(page);
getProducts();
    }
    const handleClick =(sort)=>{
      setProductsLink(`&&sort=${sort}`);
      getProducts();
    }

  useEffect(
    () => {
        getProducts();
        
    },
    []
  );
  const findRange =(range0,range1)=>{
    setProductsLink(`&&price[gte]=${range0}&price[lte]=${range1}`);
    getProducts();
  }
  function handleChanges(event, newValue) {
    setRange(newValue);
  }
  return (
    <div className="container">
     
      <div className="title-section  d-flex flex-wrap px-2 my-4 gap-3">
        <a
          className="btn align-self-end rounded-4 px-4"
          data-bs-toggle="offcanvas"
          href="#offcanvasExample"
          role="button"
          aria-controls="offcanvasExample"
        >
          Filter
        </a>
           
      <button type="button" className="btn  dropdown-toggle align-self-end rounded-4 px-4" data-bs-toggle="dropdown" aria-expanded="false">
        Sort
      </button>
      <ul className="dropdown-menu">
        <li onClick={()=>handleClick('finalPrice')}><a className="dropdown-item" href="#">Price - Low to High</a></li>
        <li onClick={()=>handleClick('-finalPrice')}><a className="dropdown-item" href="#">Price - High to Low</a></li>
        <li onClick={()=>handleClick('rating')}><a className="dropdown-item" href="#">Rating - Low to High</a></li>
        <li onClick={()=>handleClick('-rating')}><a className="dropdown-item" href="#">Rating - High to Low</a></li>
      </ul>
    

        {/**************** sidebar */}
        <div
          className="offcanvas offcanvas-start rounded-4 opacity-1"
          tabIndex={-1}
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel">
              Filter{" "}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>

          <div className="offcanvas-body ">
            <div
              className=" rounded-4 p-3 my-1 side-filters p-4 d-flex flex-column gap-4 h-auto "
              style={{ backgroundColor: "#E7ECFF" }}
            >
              <div className="filter-header ">
                Price
                <div className="slidecontainer">
                <Slider value = {range} onChange = {handleChanges} valueLabelDisplay="auto"/>
         The selected range is {range[0]} - {range[1]}
                <div className="btn w-100" onClick={()=>findRange(range[0],range[1])}>GO</div>
                </div>
              </div>
              <div className="filter-header">
                Color
                <div className=" row gap-1 ">
                  <div
                    type="button"
                    className="btn btn-primary rounded-circle  spc-h "
                  >
                    {" "}
                  </div>
                  <div
                    type="button"
                    className="btn btn-secondary rounded-circle  spc-h"
                  >
                    {" "}
                  </div>
                  <div
                    type="button"
                    className="btn btn-success rounded-circle  spc-h"
                  ></div>
                  <div
                    type="button"
                    className="btn btn-danger rounded-circle  spc-h"
                  >
                    {" "}
                  </div>
                  <div
                    type="button"
                    className="btn btn-warning rounded-circle  spc-h"
                  ></div>
                  <div
                    type="button"
                    className="btn btn-info rounded-circle  spc-h"
                  ></div>
                  <div
                    type="button"
                    className="btn btn-light rounded-circle  spc-h"
                  ></div>
                  <div
                    type="button"
                    className="btn btn-dark rounded-circle  spc-h"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="endPage p-4 m-auto rounded-4 mt-4 cards-area">
          <div className="row row-cols-1 row-cols-md-4 justify-content-flex-start card-grid px-2 py-4 m-auto rounded-4 mt-4">
            {(pageEmpty) ? 
            <img style={{width:"50%"}} src={noProduct}></img> 
            :
            
            productsP.map((item) => (
              // eslint-disable-next-line react/jsx-key
              <CardProduct item={item} />
            ))
          }
          </div>

        <nav aria-label="Page navigation example">
  <ul className="pagination">
    <li className="btn page-item" onClick={()=>changePage(currentPage-1)}>Previous</li>
    <li className="btn page-item"   onClick={()=>changePage(1)}>1</li>
    <li className="btn page-item" onClick={()=>changePage(1)}>2</li>
    <li className="btn page-item" onClick={()=>changePage(1)}>3</li>
    <li className="btn page-item" onClick={()=>changePage(currentPage+1)}>Next</li>
  </ul>
</nav>

          </div>



        </div>

        

  
  );
}

export default SeeProducts;
