import React from 'react'
import b8 from '../../Images/Brands/b8.png'
import b2 from '../../Images/Brands/b2.png'
import b3 from '../../Images/Brands/b3.png'
import b4 from '../../Images/Brands/b4.png'
import b5 from '../../Images/Brands/b5.png'
import b6 from '../../Images/Brands/b6.png'
import { Link } from 'react-router-dom'

const HomeBrands = () => {
  return (
    <div>
        <section className="container">
            <div className="brandText">
                <p>A Few brands we work with</p>
            </div>
            <div className="brands">
                <img src={b8} alt='Brand'/>
                <img src={b2} alt='Brand'/>
                <img src={b3} alt='Brand'/>
                <img src={b4} alt='Brand'/>
                <img src={b5} alt='Brand'/>
                <img src={b6} alt='Brand'/>
            </div>
            <div className="moreBrands">
                <Link to="/brands" style={{ textDecoration: "none" }}>
                    <button>More Brands</button>
                </Link>
            </div>
        </section>
    </div>
  )
}

export default HomeBrands