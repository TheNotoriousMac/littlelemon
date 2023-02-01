import React from "react";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-left">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant focused on traditional
          recipes served with a modern twist.
        </p>
      </div>

      <div className="about-right">
        <img
          src="/assets/restauranfood.jpg"
          width="200"
          alt=""
          className="about-img1"
        />
        <img
          src="/assets/restauranfood.jpg"
          width="200"
          alt=""
          className="about-img2"
        />
      </div>
    </div>
  );
};

export default About;
