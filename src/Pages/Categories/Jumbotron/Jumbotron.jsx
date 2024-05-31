import React, { useEffect, useState } from "react";
import "./Jumbotron.css";
import abttimg from "../../../assets/images/ecommrveiw-08.png";
import logo1Light from "../../../assets/images/logo1Light.png";

import sallah from '../../../assets/images/sallah-01.png'
{/*backgroundImage: `url(${bkgd})`,*/}
export default function Jumbotron() {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const textToDisplay = 'Style Everything:\nFashion Forward \n Home Ready \n and Tech Savvy!';
    const interval = setInterval(() => {
      if (index < textToDisplay.length) {
        setText((prevText) => prevText + textToDisplay.charAt(index));
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          // بعد انتهاء ظهور النص، انتظر لبعض الوقت ثم قم بتنفيذ أي عملية أخرى
          console.log('تم اكتمال ظهور النص');
        }, 2000); // انتظر لمدة 2 ثانية (2000 مللي ثانية)
      }

    }, 100);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className=" text-center v-spc all half-background mb-2  d-flex flex-column align-items-center pb-5 pt-4">
    
        <div
          className="container card view-card p-2 m-auto rounded-4 bg "
          style={{
            color: "white",
            
           
            backgroundColor:"#6C9EFF",
            backgroundSize:"cover",
            backgroundRepeat: "no-repeat",
            
          }}
          
        >
          <div className="row g-0 d-flex  justify-content-center     align-items-center ">
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
                
                  <p className="card-text view-text pb-3 text-center">
                    {text}
                    <svg height="50" width="50">
          <circle cx="25" cy="20" r="15" stroke="black" strokeWidth="3" fill="white" />
        </svg>
                  </p>
                  {/*    <img src={bag} alt="" style={{height:"150px",width:"140px"}}/>*/}
                </div>
              </div>
            </div>
            <div className="col-md-6" >
              <img
                src={sallah}
                className="img-fluid rounded-start"
                alt="..."
                style={{ width: "90%" }}
              />
            </div>
            
          </div>
        </div>
    
    </div>
  );
}
//"linear-gradient(306deg, rgba(105,37,176,1) 50%, rgba(156,127,217,1) 100%) "
