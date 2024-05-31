import React from 'react'
import loginf from '../assets/images/login-first.png'
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function ProtectedRoutes({children}) {
    const token =localStorage.getItem('userToken');
    if (!token) {
       return(
        
        <div className=" m-auto mt-5 d-flex flex-column gap-2 broder-0 " style={{maxWidth:"35%", textAlign:"center"}}>
            <h2>Please LOGIN first 😊</h2>
        <Link
                  className="nav-link active btn me-md-2 p-2 " 
                  aria-current="page"
                  to="/Login"
                  style={{ backgroundColor: "#6C9EFF", color: "white" }}
                >
                  LogIN
                </Link> 
            <img src={loginf}/>
        </div>
       ) ;
    }
  return (children  )
}

export default ProtectedRoutes;