import React, { Component } from "react";
import "./Header.scss";
import LogoAdrienLapasset from "../../assets/logos/logo-adrien-lapasset.js";
import DarkModeToggler from "./DarkModeToggler";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__logo">
          <LogoAdrienLapasset />
          Adrien Lapasset
        </div>
        <div className="header__links">
          <DarkModeToggler />
        </div>
      </header>
    );
  }
}

export default Header;
