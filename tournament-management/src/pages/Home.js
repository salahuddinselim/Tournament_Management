// src/pages/Home.js
import React from 'react';
import Slider from '../components/Slider';

function Home() {
  return (
    <div className="home-page">
      <Slider />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-8">
            <h2>Welcome to Tournament Management</h2>
            <p>
              Discover the latest updates, news, and information about our tournaments. 
              Stay connected with the exciting world of competitive gaming and sports.
            </p>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                Upcoming Tournaments
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Summer Gaming Championship</li>
                <li className="list-group-item">Regional Sports League</li>
                <li className="list-group-item">Esports Invitational</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;