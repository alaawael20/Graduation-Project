import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <div className="container footerPage">
            <div className="about">
                <p>About Us</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos possimus blanditiis deserunt rem deleniti.</p>
                <div>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-facebook-f"></i>
                </div>
            </div>
            <div className="platform">
                <p>Platform</p>
                <div className="links">
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <span>Home</span>
                    </Link>
                    <Link to="/aboutus" style={{ textDecoration: "none" }}>
                        <span>About Us</span>
                    </Link>
                    <Link to="/services" style={{ textDecoration: "none" }}>
                        <span>Our Services</span>
                    </Link>
                    <Link to="/contactus" style={{ textDecoration: "none" }}>
                        <span>Contact Us</span>
                    </Link>
                </div>
            </div>
            <div className="showroom">
                <p>Showroom</p>
                <div className="detalis">
                    <div className="info">
                        <i className="fas fa-map-marker-alt"><span>Address: </span></i>
                        <p>Gaza, Palestine</p>
                    </div>
                    <div className="info">
                        <i className="fas fa-phone"><span>Phone: </span></i>
                        <p>+02245469871</p>
                        <p>+02245469871</p>
                    </div>
                    <div className="info">
                        <i className="fas fa-envelope"><span>E-mail: </span></i>
                        <p>autoDealz@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="news">
                <p>NewsLetter</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer