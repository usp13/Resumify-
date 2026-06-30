import React from 'react' ;
import { useState } from 'react';

import { Link, useNavigate } from 'react-router';

import "../auth.form.scss"
import { useAuth } from '../hooks/useAuth';




const Register = () => {

  // TWO WAY BINDING
  const [username , setUsername ] = useState('')
  const [email , setEmail ] = useState('')
  const [password , setPassword ] = useState('')

    const { loading , handleRegister } = useAuth()
    const navigate = useNavigate()
  

    const handleSubmit = async (e) => {

      e.preventDefault();


      // handleRegister({ username, email , password})

      // navigate('/') // Navigate to HOME('/')
      try {
            await handleRegister({
              username,
              email,
              password,
            });

            navigate("/");
            
          } catch (err) {
            console.log(err);
            alert("Registration failed");
          }

      

      console.log("Form submitted");

    };
 
     if( loading ){
        return ( <main className="auth-main"> <h1>Loading.....</h1> </main>)
    }

  return (
    <main className="auth-main">
      <div className="auth-container">
        <div className="form-wrapper">
          <div className="form-header">
            <h1>Join  InterReview </h1>
            <p>Create your account to start practicing interviews</p>
          </div>

          <form onSubmit={handleSubmit}>

            <div className="inputgrp">
              <label htmlFor="username">Full Name</label>
              <input
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                id="username"
                name="username"
                placeholder="Your Username"
                required
              />
            </div>

            <div className="inputgrp">
              <label htmlFor="email">Email Address</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="inputgrp">
              <label htmlFor="password">Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                name="password"
                placeholder="Create a strong password"
                required
              />
            </div>

            <button type="submit" className="submit-btn">
              Create Account
              <span className="arrow">→</span>
            </button>
          </form>

          <div className="auth-footer">
            <p>Already have an account? <Link to={"/login"}>Sign in</Link></p>
          </div>
        </div>

        <div className="form-sidebar">
          <div className="sidebar-content">
            <h3>Why Choose InterReview?</h3>
            <ul>
              <li>✓ AI-powered mock interviews</li>
              <li>✓ Real-time feedback & insights</li>
              <li>✓ Improve your confidence</li>
              <li>✓ Land your dream job</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;