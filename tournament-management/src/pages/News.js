// src/pages/News.js
import React from 'react';

function News() {
  return (
    <div className="container mt-5">
      <h1>Latest News</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <img src="/path/to/news/image1.jpg" className="card-img-top" alt="News 1" />
            <div className="card-body">
              <h5 className="card-title">Upcoming Summer Tournament</h5>
              <p className="card-text">Join our exciting summer gaming championship!</p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img src="/path/to/news/image2.jpg" className="card-img-top" alt="News 2" />
            <div className="card-body">
              <h5 className="card-title">New Tournament Categories</h5>
              <p className="card-text">We've added new tournament categories this season.</p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img src="/path/to/news/image3.jpg" className="card-img-top" alt="News 3" />
            <div className="card-body">
              <h5 className="card-title">Community Spotlight</h5>
              <p className="card-text">Highlighting our top performers this month.</p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;