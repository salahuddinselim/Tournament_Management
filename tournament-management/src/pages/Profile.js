// src/pages/Profile.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Profile() {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    tournaments: [
      { id: 1, name: 'Summer Gaming Championship', status: 'Registered' },
      { id: 2, name: 'Regional Sports League', status: 'Upcoming' }
    ]
  });

  return (
    <div className="profile-page game_info">
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
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="/images/profile-placeholder.jpg" className="card-img-top" alt="Profile" />
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">{user.email}</p>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <h2>My Tournaments</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>Tournament Name</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {user.tournaments.map(tournament => (
                  <tr key={tournament.id}>
                    <td>{tournament.name}</td>
                    <td>{tournament.status}</td>
                    <td>
                      <button className="btn btn-sm btn-info">Details</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;