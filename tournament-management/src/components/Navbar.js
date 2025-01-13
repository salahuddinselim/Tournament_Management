import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="container">
        <div className="header-top">
          <div className="row">
            <div className="col-md-6">
              <div className="full">
                <div className="logo">
                  <Link to="/">
                    <img src={logo} alt="Tournament Management" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="header-bottom">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Link className="navbar-brand" to="/">Tournament Management</Link>
            <button 
              className="navbar-toggler" 
              type="button" 
              onClick={toggleNavbar}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/team">Team</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/news">News</Link>
                </li>
                <li className="nav-item dropdown">
                  <a 
                    className="nav-link dropdown-toggle" 
                    href="#" 
                    id="navbarDropdown" 
                    role="button" 
                    data-toggle="dropdown" 
                    aria-haspopup="true" 
                    aria-expanded="false"
                  >
                    Tournaments
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link className="dropdown-item" to="/create-tournament">Create Tournament</Link>
                    <Link className="dropdown-item" to="/add-player">Add Player</Link>
                  </div>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/blog">Blog</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact</Link>
                </li>
              </ul>
              <div className="navbar-nav">
                <Link className="nav-item nav-link" to="/login">Login</Link>
                <Link className="nav-item nav-link btn btn-primary text-white" to="/register">Register</Link>
              </div>
              <form className="form-inline my-2 my-lg-0 ml-2">
                <input 
                  className="form-control mr-sm-2" 
                  type="search" 
                  placeholder="Search" 
                  aria-label="Search" 
                />
                <button 
                  className="btn btn-outline-success my-2 my-sm-0" 
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;