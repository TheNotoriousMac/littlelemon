import React from "react";

const Nav = () => {
  return (
    <nav>
      <ul className="navUL">
        <li>
          <a href="#Home">
            <img src="./assets/Logo.svg" alt="logo"></img>
          </a>
        </li>
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
    </nav>
  );
};

export default Nav;
