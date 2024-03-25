import React from 'react'
import "./Jumbotron.css"
import abttimg from '../../assets/images/ecommrveiw-08.png'
import logo1Light from "../../assets/images/logo1Light.png";
import bags from '../../assets/images/bags-07.png'
export default function Jumbotron() {
  return (


    <div className=" text-center v-spc all">
      <div className='half-background m-0 ' style={{position:"relative"}}>
        <div className="card view-card p-5 rounded-4"  style={{ background: "linear-gradient(306deg, rgba(105,37,176,1) 50%, rgba(156,127,217,1) 100%) " ,color:"white"}}>
          <div className="row g-0 d-flex ">
            <div className="col-md-5" style={{}}>
              <img src={abttimg} className="img-fluid rounded-start" alt="..." style={{width:"100%"}} />
            </div>
            <div className="col-md-7 ms-auto  d-flex flex-column justify-content-center align-items-center ">
              <div className="card-body d-flex flex-column gap-3  ">
                <h1 className="card-title">GhazelleMart  <img
              src={logo1Light}
              alt="Logo"
              width={110}
              className="d-inline-block align-text-center"
            />
            </h1>
                <p className="card-text">Style Everything: Fashion Forward, Home Ready, and Tech Savvy!</p>
              </div>
              <img src={bags} alt="" style={{width:"50%"}}/>
            </div>
          </div>
        </div>


      </div>

    </div>



  )
}
