import React from 'react' ;
import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import "../auth.form.scss"
import { useAuth } from '../hooks/useAuth';

const Login = () => {

  const { loading , handleLogin } = useAuth()
  const navigate = useNavigate()


  const [ email , setEmail] =  useState('')
  const [ password , setPassword] =  useState('')


  const handleSubmit = async (e) => {
    
    e.preventDefault();

    await handleLogin({ email, password });

    navigate('/');

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
            <h1>Welcome Back</h1>
            <p>Sign in to your InterReview account</p>
          </div>

          <form onSubmit={handleSubmit}>
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
                placeholder="Enter your password"
                required
              />
            </div>

            <button type="submit" className="submit-btn">
              Sign In
              <span className="arrow">→</span>
            </button>
          </form>

          <div className="auth-footer">
            <p>New here? <Link to={"/register"}>Create an account</Link></p>
          </div>
        </div>

        <div className="form-sidebar">
          <div className="sidebar-content">
            <h3>Master Interview Skills</h3>
            <ul>
              <li>✓ Practice with AI-powered interviews</li>
              <li>✓ Get personalized feedback</li>
              <li>✓ Track your progress</li>
              <li>✓ Prepare for real opportunities</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;

