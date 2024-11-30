import React from 'react'
import TitleSection from '../Uitily/TitleSection'
import car7 from '../../Images/car7.jpg'
import { Link } from 'react-router-dom'

const HomeServices = () => {
  return (
    <div>
        <TitleSection title="Our Services"/>
        <div className="content">
            <div className="contentImg"><img src={car7} alt='car'/></div>
            <div className="contentText">
                <p>Best For Your Car</p>
                <p>Shipping - How We get the vehicle to you</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Perferendis minima a explicabo quidem molestias accusantium suscipit distinctio, 
                    itaque excepturi dolorum officiis quaerat fuga reiciendis iste sequi voluptate praesentium ullam in. 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Tempora id deleniti animi earum necessitatibus nostrum maxime excepturi blanditiis a consectetur? 
                    Non tempora veritatis saepe repellat sequi ratione, sint ad quaerat. 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nobis culpa quaerat est minus rerum, 
                    id impedit officiis fuga, incidunt ex ipsa repudiandae distinctio. Voluptate a impedit aut molestiae et.</p>
                  <Link to="/services" style={{ textDecoration: "none" }}>
                    <button>Read More</button>
                  </Link>
            </div>
        </div>
    </div>
  )
}

export default HomeServices