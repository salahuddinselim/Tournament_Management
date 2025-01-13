// src/pages/Register.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const [registerData, setRegisterData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Registration logic
    console.log('Registration Data:', registerData);
    // Simulated registration success
    navigate('/login');
  };

  return (
    <div className="register-page game_info">
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
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">Register</div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>First Name</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="firstName"
                          value={registerData.firstName}
                          onChange={handleChange}
                          required 
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Last Name</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="lastName"
                          value={registerData.lastName}
                          onChange={handleChange}
                          required 
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      name="email"
                      value={registerData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Password</label>
                        <input 
                          type="password" 
                          className="form-control" 
                          name="password"
                          value={registerData.password}
                          onChange={handleChange}
                          required 
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Confirm Password</label>
                        <input 
                          type="password" 
                          className="form-control" 
                          name="confirmPassword"
                          value={registerData.confirmPassword}
                          onChange={handleChange}
                          required 
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>User Type</label>
                    <select 
                      className="form-control" 
                      name="userType"
                      value={registerData.userType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select User Type</option>
                      <option value="player">Player</option>
                      <option value="organizer">Tournament Organizer</option>
                      <option value="coach">Coach</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-primary">Register</button>
                  <div className="mt-3">
                    <Link to="/login">Already have an account? Login</Link>
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

export default Register;