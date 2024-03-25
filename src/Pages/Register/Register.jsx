import React from 'react'
import signUp from '../../assets/images/mobile-shopping.jpg'
function Register() {
  return (
<div className="container py-4">
  <div className="row g-0 align-items-center">
    <div className="col-lg-6 mb-5 mb-lg-0">
      <div className="card cascading-right" style={{background: 'hsla(0, 0%, 100%, 0.55)', backdropFilter: 'blur(30px)'}}>
        <div className="card-body p-5 shadow-5 text-center">
          <h2 className="fw-bold mb-5">Sign up now</h2>
          <form>
            {/* 2 column grid layout with text inputs for the first and last names */}
            <div className="row">
              <div className="col-md-6 mb-4">
              <div className="form-floating ">
                <input type="text" className="form-control" id="floatingInput8" placeholder="name@example.com" />
                <label htmlFor="floatingInput">First Name</label>
              </div>
              </div>
              <div className="col-md-6 mb-4">
              <div className="form-floating ">
                <input type="text" className="form-control" id="floatingInput8" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Last Name</label>
              </div>
              </div> 
            </div>
            {/* Email input */}
            
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Email address</label>
              </div>
            {/* Password input */}
           
           
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <label htmlFor="floatingPassword">Password</label>
              </div>
            {/* Checkbox */}
            <div className="form-check d-flex justify-content-center mb-4">
              <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example33" defaultChecked />
              <label className="form-check-label" htmlFor="form2Example33">
                Subscribe to our newsletter
              </label>
            </div>
            {/* Submit button */}
            <button type="submit" className="btn btn-primary btn-block mb-4">
              Sign up
            </button>
            {/* Register buttons */}
            <div className="text-center">
              <p>or sign up with:</p>
              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-facebook-f" />
              </button>
              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-google" />
              </button>
              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-twitter" />
              </button>
              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-github" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className="col-lg-6 mb-5 mb-lg-0">
      <img src={signUp} className="w-100 rounded-4 shadow-4" alt />
    </div>
  </div>
</div>

  )
}

export default Register