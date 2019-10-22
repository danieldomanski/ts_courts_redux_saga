import React from "react";
import "../../styles/Header.css";

const Header = () => (
  <header className="header__container">
    <a href="/" className="header__logo">
      Home
    </a>
    <nav>
      <ul>
        <li>
          <a href="/schools">Schools</a>
        </li>
        <li>
          <a href="/courts">Courts</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
