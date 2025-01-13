// src/pages/Blog.js
import React from 'react';

function Blog() {
  return (
    <div className="container mt-5">
      <h1>Tournament Management Blog</h1>
      <div className="row">
        <div className="col-md-8">
          <article className="mb-4">
            <h2>Tips for Successful Tournament Organization</h2>
            <p>Learn the best practices for managing tournaments efficiently...</p>
            <a href="#" className="btn btn-primary">Read Full Article</a>
          </article>
          <article className="mb-4">
            <h2>The Future of Competitive Gaming</h2>
            <p>Exploring trends and innovations in the gaming tournament landscape...</p>
            <a href="#" className="btn btn-primary">Read Full Article</a>
          </article>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">Recent Posts</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Tournament Management Strategies</li>
              <li className="list-group-item">Player Engagement Techniques</li>
              <li className="list-group-item">Technology in Sports</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;