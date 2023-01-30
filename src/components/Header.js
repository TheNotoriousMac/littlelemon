import React from "react";
import Nav from "./Nav";

const Header = () => {
  return (
    <header>
      <div className="topHeader">
        <img src="./assets/Logo.svg" alt="logo"></img>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
