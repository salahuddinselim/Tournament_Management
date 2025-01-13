// src/pages/CreateTournament.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CreateTournament() {
  const [tournamentData, setTournamentData] = useState({
    name: '',
    sport: '',
    startDate: '',
    endDate: '',
    location: '',
    description: '',
    registrationFee: '',
    maxTeams: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTournamentData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tournament creation logic
    console.log('Tournament Data:', tournamentData);
  };

  return (
    <div className="create-tournament-page game_info">
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
        <h2>Create New Tournament</h2>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Tournament Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  name="name"
                  value={tournamentData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Sport</label>
                <select 
                  className="form-control" 
                  name="sport"
                  value={tournamentData.sport}
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
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Start Date</label>
                <input 
                  type="date" 
                  className="form-control" 
                  name="startDate"
                  value={tournamentData.startDate}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>End Date</label>
                <input 
                  type="date" 
                  className="form-control" 
                  name="endDate"
                  value={tournamentData.endDate}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Location</label>
                <input 
                  type="text" 
                  className="form-control" 
                  name="location"
                  value={tournamentData.location}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Max Teams</label>
                <input 
                  type="number" 
                  className="form-control" 
                  name="maxTeams"
                  value={tournamentData.maxTeams}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea 
              className="form-control" 
              name="description"
              value={tournamentData.description}
              onChange={handleChange}
              rows="4"
            ></textarea>
          </div>
          <div className="form-group">
            <label>Registration Fee</label>
            <input 
              type="number" 
              className="form-control" 
              name="registrationFee"
              value={tournamentData.registrationFee}
              onChange={handleChange}
              required 
            />
          </div>
          <button type="submit" className="btn btn-primary">Create Tournament</button>
        </form>
      </div>
    </div>
  );
}

export default CreateTournament;