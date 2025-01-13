// src/pages/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Login logic
    console.log('Login Data:', loginData);
    // Simulated login success
    navigate('/profile');
  };

  return (
    <div className="login-page game_info">
      <section id="top">
        <header>
          <div className="container">
            <div className="header-top">
              <div className="row">
                <div className="col-md-6">
                  <div className="full">
                    <div className="logo">
                      <Link to="/">
                        <img src="/images/logo.png" alt="Tournament Management" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </section>

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">Login</div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Email</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      name="email"
                      value={loginData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input 
                      type="password" 
                      className="form-control" 
                      name="password"
                      value={loginData.password}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">Login</button>
                  <div className="mt-3">
                    <Link to="/register">Don't have an account? Register</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;