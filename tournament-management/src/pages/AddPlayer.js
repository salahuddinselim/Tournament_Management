// src/pages/AddPlayer.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AddPlayer() {
  const [playerData, setPlayerData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    sport: '',
    teamName: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlayerData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add player submission logic
    console.log('Player Data:', playerData);
  };

  return (
    <div className="add-player-page game_info">
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
        <h2>Add New Player</h2>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>First Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  name="firstName"
                  value={playerData.firstName}
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
                  value={playerData.lastName}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Email</label>
                <input 
                  type="email" 
                  className="form-control" 
                  name="email"
                  value={playerData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Phone</label>
                <input 
                  type="tel" 
                  className="form-control" 
                  name="phone"
                  value={playerData.phone}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Sport</label>
                <select 
                  className="form-control" 
                  name="sport"
                  value={playerData.sport}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Sport</option>
                  <option value="football">Football</option>
                  <option value="basketball">Basketball</option>
                  <option value="esports">Esports</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Team Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  name="teamName"
                  value={playerData.teamName}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Add Player</button>
        </form>
      </div>
    </div>
  );
}

export default AddPlayer;