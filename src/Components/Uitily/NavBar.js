import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ link1, link2, link3, link4, to1, to2, to3, to4 }) => {
  return (
    <div>
      <header className="containerPage">
        <ul className="topnav" id="myTopnav">
          <li>
            <a href="/" className="logo">
              <span>
                <span className="line"></span>
                <span className="word1">Auto</span>
                <span className="line"></span>
              </span>
              <span className="word">Dealz</span>
            </a>
          </li>
          <Link to={to1} style={{ textDecoration: "none" }}>
            <li className="active nav">{link1}</li>
          </Link>
          <Link to={to2} style={{ textDecoration: "none" }}>
            <li className="nav">{link2}</li>
          </Link>
          <Link to={to3} style={{ textDecoration: "none" }}>
            <li className="nav">{link3}</li>
          </Link>
          <Link to={to4} style={{ textDecoration: "none" }}>
            <li className="nav">{link4}</li>
          </Link>
          <Link to="/search" style={{ textDecoration: "none" }}>
            <li>
              <i class="fas fa-search"></i>
            </li>
          </Link>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <li>
              <i class="fas fa-sign-in-alt"></i>
            </li>
          </Link>
        </ul>
      </header>
    </div>
  );
};

export default NavBar;
