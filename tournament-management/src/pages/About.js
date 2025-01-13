// src/pages/About.js
import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="about-page game_info">
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
        
        <div className="inner-page-banner">
          <div className="container">
            <h1>About Us</h1>
          </div>
        </div>
      </section>

      <section id="contant" className="contant main-heading">
        <div className="aboutus">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <div className="about-section">
                  <div className="text-center">
                    <h2>Who We Are</h2>
                    <p>
                      Tournament Management is a comprehensive platform dedicated to 
                      streamlining sports and gaming tournament organization.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="dark-section" style={{backgroundImage: 'url(/images/walle.jpg)'}}>
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <div className="heading-main">
                  <h2>Our Mission</h2>
                  <p>
                    To revolutionize tournament management by providing innovative 
                    tools and platforms that connect athletes, teams, and organizers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;