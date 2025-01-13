// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer id="footer" className="footer mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>About Us</h3>
            <p>Tournament Management Platform connecting athletes, teams, and organizers.</p>
          </div>
          <div className="col-md-4">
            <h3>Quick Links</h3>
            <ul className="list-unstyled">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/team">Team</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Connect With Us</h3>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="fab fa-facebook"></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="fab fa-twitter"></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="fab fa-instagram"></a>
            </div>
            <div className="contact-info mt-3">
              <p>Email: info@tournamentmanagement.com</p>
              <p>Phone: +1 (123) 456-7890</p>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 text-center">
            <p>&copy; 2025 Tournament Management. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;