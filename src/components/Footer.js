import React from "react";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src="./assets/restauranfood.jpg"
          alt="footer pic"
          width="150"
        ></img>
      </div>
      <div>
        <p>Doormat Navigation</p>
        <ul>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Menu">Menu</a>
          </li>
          <li>
            <a href="#Reservations">Reservations</a>
          </li>
          <li>
            <a href="#OrderOnline">Order Online</a>
          </li>
          <li>
            <a href="#Login">Login</a>
          </li>
        </ul>
      </div>
      <div>
        <p>Contact</p>
        <ul>
          <li>
            <a href="#Address">Address</a>
          </li>
          <li>
            <a href="#PhoneNumber">Phone Number</a>
          </li>
          <li>
            <a href="#Email">Email</a>
          </li>
        </ul>
      </div>
      <div>
        <p>Social Media Links</p>
        <ul>
          <li>
            <a href="#Address">Address</a>
          </li>
          <li>
            <a href="#PhoneNumber">Phone Number</a>
          </li>
          <li>
            <a href="#Email">Email</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
