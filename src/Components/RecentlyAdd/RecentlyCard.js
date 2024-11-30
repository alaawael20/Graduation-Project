import React from 'react'
import { Link } from 'react-router-dom'

const RecentlyCard = ({img, price, NameCar, fuel, engine, power, trans}) => {
  return (
    <div className="card mb-2">
        <div className="carImg">
            <img src={img} alt='Car'/>
            <span>{price} $</span>
        </div>
        <div className="carnName">{NameCar}</div>
        <div className="carDetails">
            <i className="fas fa-gas-pump"><span>Fuel: {fuel}</span></i>
            <i className="fas fa-car"><span>Engine: {engine}</span></i>
            <i className="fas fa-power-off"><span>Power: {power}</span></i>
            <i className="fas fa-cog"><span>Transmission: {trans}</span></i>
        </div>
        <Link to="/recentlyAdded/detailcar" style={{ textDecoration: "none" }}>
          <div className="detailsBtn"><button>Details</button></div>
        </Link>
    </div>
  )
}

export default RecentlyCard