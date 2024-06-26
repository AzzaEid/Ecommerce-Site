import React from 'react'
import { Link } from 'react-router-dom'
import logoDark from "../assets/images/logo1Dark-01.png";

function Footer() {
  return (
    <div >
     <div  className=" mt-5 p-5 rounded-top-5 " style={{ backgroundColor: "#E7ECFF", color:"#F3EFFA"}}>
      <div className=" row container ">
        <div className="col-md-4 d-flex flex-column gap-3 align-items-flex-start">
          <Link
            className="navbar-brand text-center link-cl  d-flex justify-content-flex-start"
            href="#"
            style={{ color: "#263566", fontFamily: "Abril Fatface" }}
            aria-current="page"
            to="/"
          >
            <img
              src={logoDark}
              alt="Logo"
              width={40}
              className="d-inline-block align-text-center"
            />
            GhazelleMart
          </Link>
         <div className="icons d-flex gap-4">
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 3 7" fill="none">
    <g clipPath="url(#clip0_32_149)">
      <path d="M0.806586 6.6917V3.9861H0.0706177V3.01196H0.806586V2.17992C0.806586 1.52609 1.24132 0.925659 2.24306 0.925659C2.64864 0.925659 2.94855 0.963456 2.94855 0.963456L2.92492 1.87314C2.92492 1.87314 2.61906 1.87025 2.28529 1.87025C1.92405 1.87025 1.86617 2.03207 1.86617 2.30066V3.01196H2.95364L2.90632 3.9861H1.86617V6.6917H0.806586Z" fill="#263566" />
    </g>
    <defs>
      <clipPath id="clip0_32_149">
        <rect width="2.88302" height="5.76604" fill="white" transform="translate(0.0705566 0.925842)" />
      </clipPath>
    </defs>
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 9 7" fill="none">
    <g clipPath="url(#clip0_32_154)">
      <path d="M8.10314 1.62812C7.82845 1.74529 7.5371 1.82219 7.23876 1.85628C7.54951 1.67696 7.78812 1.39299 7.90047 1.05464C7.60506 1.22342 7.28186 1.34234 6.94483 1.40626C6.67029 1.12466 6.27919 0.948669 5.84632 0.948669C5.01518 0.948669 4.34132 1.59744 4.34132 2.39763C4.34132 2.51121 4.35464 2.62178 4.38029 2.72786C3.12954 2.66742 2.02063 2.09056 1.27834 1.21391C1.14883 1.42791 1.07461 1.67685 1.07461 1.94236C1.07461 2.44508 1.34032 2.88857 1.74412 3.14843C1.50513 3.14122 1.2714 3.07907 1.06244 2.96717C1.06235 2.97324 1.06235 2.97931 1.06235 2.9854C1.06235 3.68745 1.5811 4.27311 2.26955 4.40622C2.04793 4.46425 1.81547 4.47274 1.58993 4.43105C1.78142 5.00672 2.33723 5.42562 2.99575 5.43735C2.4807 5.82596 1.83177 6.05762 1.12671 6.05762C1.00521 6.05762 0.88544 6.05075 0.7677 6.03737C1.43371 6.4485 2.22476 6.68838 3.07464 6.68838C5.84282 6.68838 7.35653 4.48043 7.35653 2.56567C7.35653 2.50282 7.3551 2.44033 7.35217 2.3782C7.6468 2.17313 7.9011 1.91913 8.10314 1.62812Z" fill="#263566" />
    </g>
    <defs>
      <clipPath id="clip0_32_154">
        <rect width="7.41348" height="5.76604" fill="white" transform="translate(0.78064 0.925903)" />
      </clipPath>
    </defs>
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 8 7" fill="none">
    <g clipPath="url(#clip0_32_159)">
      <path d="M2.42487 6.69157V2.52335H1.02694V6.69157H2.42487ZM1.72608 1.95391C2.21357 1.95391 2.517 1.63384 2.517 1.23386C2.50792 0.824859 2.21358 0.513672 1.73533 0.513672C1.25716 0.513672 0.944458 0.824865 0.944458 1.23386C0.944458 1.63386 1.24782 1.95391 1.71696 1.95391H1.72604H1.72608ZM3.19862 6.69157H4.59655V4.36384C4.59655 4.23926 4.60563 4.11481 4.64255 4.02576C4.74361 3.77686 4.97362 3.51906 5.35979 3.51906C5.86564 3.51906 6.06801 3.9013 6.06801 4.46164V6.69154H7.46586V4.30153C7.46586 3.02121 6.77619 2.4255 5.85644 2.4255C5.10231 2.4255 4.7712 2.84326 4.58725 3.12779H4.59658V2.52327H3.19865C3.21699 2.91439 3.19865 6.69149 3.19865 6.69149L3.19862 6.69157Z" fill="#263566" />
    </g>
    <defs>
      <clipPath id="clip0_32_159">
        <rect width="6.58976" height="6.1779" fill="white" transform="translate(0.961731 0.513916)" />
      </clipPath>
    </defs>
  </svg>
  <svg xmlns="http://www.w3.org/0000/svg" width={20} height={20} viewBox="0 0 8 8" fill="black">
    <g clipPath="url(#clip0_32_164)">
      <path d="M3.9753 2.14372C3.04963 2.14372 2.30299 2.88651 2.30299 3.80741C2.30299 4.7283 3.04963 5.47109 3.9753 5.47109C4.90096 5.47109 5.6476 4.7283 5.6476 3.80741C5.6476 2.88651 4.90096 2.14372 3.9753 2.14372ZM3.9753 4.88902C3.37711 4.88902 2.88808 4.40396 2.88808 3.80741C2.88808 3.21085 3.37565 2.72579 3.9753 2.72579C4.57494 2.72579 5.06251 3.21085 5.06251 3.80741C5.06251 4.40396 4.57348 4.88902 3.9753 4.88902ZM6.10606 2.07567C6.10606 2.29141 5.93141 2.46372 5.71601 2.46372C5.49914 2.46372 5.32595 2.28996 5.32595 2.07567C5.32595 1.86137 5.5006 1.68762 5.71601 1.68762C5.93141 1.68762 6.10606 1.86137 6.10606 2.07567ZM7.21366 2.46951C7.18891 1.9497 7.06957 1.48925 6.68679 1.10989C6.30546 0.730527 5.84263 0.611795 5.32013 0.585732C4.78161 0.555326 3.16752 0.555326 2.62901 0.585732C2.10796 0.610347 1.64513 0.729079 1.26235 1.10844C0.879567 1.4878 0.761676 1.94825 0.735478 2.46806C0.704914 3.0038 0.704914 4.60957 0.735478 5.14531C0.760221 5.66512 0.879567 6.12556 1.26235 6.50493C1.64513 6.88429 2.10651 7.00302 2.62901 7.02908C3.16752 7.05949 4.78161 7.05949 5.32013 7.02908C5.84263 7.00447 6.30546 6.88574 6.68679 6.50493C7.06811 6.12556 7.18746 5.66512 7.21366 5.14531C7.24422 4.60957 7.24422 3.00525 7.21366 2.46951ZM6.51795 5.72014C6.40443 6.00394 6.18466 6.22258 5.89794 6.33696C5.46858 6.50637 4.44977 6.46728 3.9753 6.46728C3.50082 6.46728 2.48055 6.50493 2.05265 6.33696C1.76739 6.22402 1.54762 6.00538 1.43264 5.72014C1.26235 5.293 1.30165 4.27944 1.30165 3.80741C1.30165 3.33538 1.2638 2.32037 1.43264 1.89467C1.54616 1.61088 1.76593 1.39224 2.05265 1.27785C2.48201 1.10844 3.50082 1.14753 3.9753 1.14753C4.44977 1.14753 5.47004 1.10989 5.89794 1.27785C6.1832 1.39079 6.40297 1.60943 6.51795 1.89467C6.68824 2.32182 6.64894 3.33538 6.64894 3.80741C6.64894 4.27944 6.68824 5.29444 6.51795 5.72014Z" fill="#263566" />
    </g>
    <defs>
      <clipPath id="clip0_32_164">
        <rect width="6.58976" height="7.41348" fill="black" transform="translate(0.731049 0.101929)" />
      </clipPath>
    </defs>
  </svg>
</div>

        </div>
      
          <div className="col-md-8 d-flex flex-column gap-1 align-items-flex-start" style={{color:"#fff"}}>

            <a className="link-secondary link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover" href='#'> About our store</a>
            <a className="link-secondary link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover" href='#'>Connect with us</a>
            <a className="link-secondary link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover" href='#'>Exchange and return policy</a>
            <a className="link-secondary link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover" href='#'>Terms and Conditions</a>
            <a className="link-secondary link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover" href='#'>Usage policy</a>
          </div>
      </div>


  </div>
  <div className=" pt-2 pb-1" style={{ backgroundColor: "#F3EFFA", color:"#6F50C8"}}>
    <p className='text-center'> All rights reserved © 2024        @azzaaeid_</p>
  </div>
    </div>
   
  )
}

export default Footer
/*

*/