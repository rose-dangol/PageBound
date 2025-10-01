import React from 'react'
import Navbar from "../../components/Navbar/Navbar"; 
import './Auth.css'
const Auth = () => {
const handleRegister = (e) => {
    e.preventDefault();
  console.log("Register button clicked");
};
  return (
    <div>
      <Navbar/>
        <div className="auth-container">
        <div className="auth-box">
          {/* <div className="auth-tabs">
            <button className='auth-tab active'>
              Login
            </button>
            <button className='auth-tab active'>
              Sign Up
            </button>
          </div> */}
          {/* <form>
              <h2 className="auth-title">Welcome Back</h2>
              <div className="form-group">
                <label className="form-label">Email or Username</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Enter your email or username"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-input"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary form-button">
                Login
              </button>
            </form> */}
        <form onSubmit={handleRegister}>
              <h2 className="auth-title">Create Account</h2>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Choose a username"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-input"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-input"
                  placeholder="Create a password"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary form-button">
                Sign Up
              </button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Auth
