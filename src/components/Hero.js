import React from "react";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero">
        <div className="hero-section1">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant focused on
            traditional recipes served with a modern twist.
          </p>
          <button>Reserve a Table</button>
        </div>
        <div className="hero-section2">
          <img
            src="./assets/restauranfood.jpg"
            alt="Restaurant Food"
            width="300"
            height="350"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
