import React from "react";
import "../../styles/Header.css";

const Header = () => (
  <header className="header__container">
    <a href="/" className="header__logo">
      Home
    </a>
    <nav className="header__nav">
      <ul className="header__nav__list">
        <li className="header__nav__item">
          <a href="/schools">Schools</a>
        </li>
        <li className="header__nav__item">
          <a href="/courts">Courts</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
