// src/pages/Team.js
import React from 'react';

function Team() {
  return (
    <div className="container mt-5">
      <h1>Our Team</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <img src="/path/to/team/member1.jpg" className="card-img-top" alt="Team Member 1" />
            <div className="card-body">
              <h5 className="card-title">John Doe</h5>
              <p className="card-text">Founder & CEO</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img src="/path/to/team/member2.jpg" className="card-img-top" alt="Team Member 2" />
            <div className="card-body">
              <h5 className="card-title">Jane Smith</h5>
              <p className="card-text">CTO</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img src="/path/to/team/member3.jpg" className="card-img-top" alt="Team Member 3" />
            <div className="card-body">
              <h5 className="card-title">Mike Johnson</h5>
              <p className="card-text">Head of Operations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;