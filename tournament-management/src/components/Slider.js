// src/components/Slider.js
import React from 'react';
import slide1 from '../assets/images/slide1.jpg';
import slide2 from '../assets/images/slide2.jpg';
import slide3 from '../assets/images/slide3.jpg';

function Slider() {
  return (
    <div className="full-slider">
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={slide1} alt="First slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Tournament Management</h5>
              <p>Connecting Athletes and Organizers</p>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={slide2} alt="Second slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Seamless Tournament Organization</h5>
              <p>Simplifying Event Management</p>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={slide3} alt="Third slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Competitive Gaming Platform</h5>
              <p>Bringing Gamers Together</p>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default Slider;