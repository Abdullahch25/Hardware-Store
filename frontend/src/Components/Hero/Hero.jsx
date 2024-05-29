import React from 'react';
import './Hero.css';
import drillImage from '../Assets/drill.png'; 

const Hero = () => {
    return (
        <>
      <div className="hero-banner">
        <div className="banner-content">
          <h5>Best Deal</h5>
          <h1>Power Drill</h1>
          <h1 className="large-heading">Promotion</h1>
          <button className="banner-button">Shop Power Drill</button>
        </div>
        <div className="banner-image">
          <img src={drillImage} alt="Power Drill" />
        </div>
        <div className="banner-description">
          <h4>Description</h4>
          <p>
            Enhance your toolkit with our high-performance power drill, designed for precision and power. Perfect for all your DIY projects and professional tasks. Don't miss out on this limited-time offer!
          </p>
        </div>
       
      </div>
      </>
    );
  };
  

export default Hero;
