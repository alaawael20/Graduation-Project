import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {

  return (
    <div>
      <header className='containerPage'>
        <ul className='topnav' id='myTopnav'>
            <li><a href='/' className="logo"><span><span className="line"></span><span className="word1">Auto</span><span className="line"></span></span><span className="word">Dealz</span></a></li>
            <Link to="/" style={{ textDecoration: "none" }}>
            <li className="active nav">Home</li>
            </Link>
            <Link to="/aboutus" style={{ textDecoration: "none" }}>
              <li className="nav">About</li>
            </Link>
            <Link to="/services" style={{ textDecoration: "none" }}>
              <li className="nav">Service</li>
            </Link>
            <Link to="/contactus" style={{ textDecoration: "none" }}>
              <li className="nav">Contact</li>
            </Link>
            <Link to="/search" style={{ textDecoration: "none" }}>
              <li><i class="fas fa-search"></i></li>
            </Link>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <li><i class="fas fa-sign-in-alt"></i></li>
            </Link>
        </ul>
      </header>
    </div>
  )
}

export default NavBar