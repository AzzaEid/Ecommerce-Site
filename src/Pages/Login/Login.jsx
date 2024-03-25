import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
  return (
    <div className="container py-4">
      <div className="col-lg-6 mb-5 mb-lg-0">
        <div className="card cascading-right" style={{ background: 'hsla(0, 0%, 100%, 0.55)', backdropFilter: 'blur(30px)' }}>
          <div className="card-body p-5 shadow-5 text-center">
            <h2 className="fw-bold mb-5">Log In</h2>
            <form>
              {/* Email input */}
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              {/**className="form-label" */}

              {/* Password input */}

              <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <label htmlFor="floatingPassword">Password</label>
              </div>

              {/* 2 column grid layout for inline styling */}
              <div className="row mb-4">
                <div className="col d-flex justify-content-center">
                  {/* Checkbox */}
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" defaultValue id="form2Example31" defaultChecked />
                    <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                  </div>
                </div>
                <div className="col">
                  {/* Simple link */}
                  <Link className="nav-link active" aria-current="page" to="/ForgetPass">Forgot password?</Link>
                </div>
              </div>
              {/* Submit button */}
              <button type="button" className="btn btn-primary btn-block mb-4 m-auto">Sign in</button>
              {/* Register buttons */}
              <div className="text-center">
                <p>Not a member? <Link className="nav-link active" aria-current="page" to="/Register">Register</Link></p>

              </div>
            </form>
          </div>
        </div>
      </div>

    </div>


  )
}

export default Login