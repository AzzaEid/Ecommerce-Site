import React, { useContext } from 'react'
import { UserContext } from "../../context/UserContextProvider";
import { Link, useNavigate } from 'react-router-dom';

function Profile() {
    const {userName,setUserName,setUserToken} = useContext(UserContext);
    const navigate = useNavigate();
  
  const logout = () =>{
    localStorage.removeItem('userToken');
    
    setUserName(null);
    navigate('/');
    setUserToken(null); 
  }
  
  return (
    <div className='container'>
       <div className="row my-4">
  <div className="col-3">
    <nav id="navbar-example3" className="h-100 flex-column align-items-stretch pe-4 border-end">
      <nav className="nav nav-pills flex-column">
        <a className="nav-link" href="#item-1">Profile</a>
      
        <a className="nav-link" href="#item-2">Orders</a>
        <a className="nav-link" href="#item-3">Item 3</a>
       
      </nav>
    </nav>
  </div>
  <div className="col-8 ">
    <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" className="scrollspy-example-2 d-flex flex-column gap-4" tabIndex={0}>
      <div id="item-1">
  <h4>Profile</h4>
  <div className="card mb-3" style={{maxWidth: "70%"}}>
    <div className="row g-0">
      
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">Hi {userName} 👋 </h5>
        </div>
      
      </div>
    </div>
     
  </div>
   <button className="btn" onClick={logout} style={{ backgroundColor: "#F47069", color: "white" }}>
        <Link
                  className="nav-link active btn btn-primary me-md-2 " 
                  aria-current="page"
                  to="/Login"
                  style={{ backgroundColor: "#F47069", color: "white" }}
                >
                  LogOUT
                </Link> </button>
  </div>


     

      <div id="item-2">
        <h4>Item 2</h4>
        <p>...</p>
      </div>
      <div id="item-3">
        <h4>Item 3</h4>
        <p>...</p>
      </div>
   
    </div>
  </div>
</div>

    </div>
  )
}

export default Profile