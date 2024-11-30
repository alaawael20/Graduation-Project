import React from 'react'
import TitleSection from '../Uitily/TitleSection'
import car9 from '../../Images/car9.jpg'

const HomeAbout = () => {
  return (
    <div>
        <TitleSection title="About Us"/>
        <div className="containerPage aboutContent">
            <div className="aboutText">
                <p>We offer high quality cars at unbelievable prices And we create a pleasant buying experience.</p>
                <p>Our process is very simple. You choose the car you want and the quantity. Then we do everything until we ship the car to the port of your choice What we can ship Up to 4 cars per container but we can also ship 1 car per container own, if that's what you prefer.</p>
                <div className="aboutUS">
                    <div className="about">
                        <i className="fas fa-check"></i>
                        <div className="true">
                            <span>Affordable car prices</span>
                            <span>Always negotiable</span>
                        </div>
                    </div>
                    <div className="about">
                        <i className="fas fa-check"></i>
                        <div className="true">
                            <span>13 years in the field</span>
                            <span>Business a lot of experience</span>
                        </div>
                    </div>
                    <div className="about">
                        <i className="fas fa-check"></i>
                        <div>
                            <span>Reliable and orginal spare parts</span>
                            <span>We only use orginal parts.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="aboutImg"><img src={car9} alt='car'/></div>
        </div>
    </div>
  )
}

export default HomeAbout