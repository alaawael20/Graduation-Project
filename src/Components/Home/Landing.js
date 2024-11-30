import React from 'react'
import car1 from '../../Images/car1.jpg'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div>
        <section className="containerPage">
            <div className="main_section">
                <div className="left_side">
                    <div className="title"><span>Easy</span> & Fast Find Your Dream Car?</div>
                    <div className="subtitle">We are Auto Dealz, We Give you a complete export sale service for a vast rang of top quality cars & commerial vehicles.</div>
                    <Link to="/services" style={{ textDecoration: "none" }}>
                        <div className="btn_check"><button>Check It Now <i class="fas fa-arrow-right"></i></button></div>
                    </Link>
                </div>
                <div className="right_side">
                    <div className="pic"><img src={car1} alt="Car"/></div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Landing