import React from "react";
import { Link } from "react-router-dom";

const RecentlyCard = ({
  img,
  price,
  NameCar,
  fuel,
  engine,
  power,
  trans,
  editBtn,
  deleteBtn,
  detailesBtn,
  display1,
  display2,
  display3,
}) => {
  return (
    <div className="card mb-2">
      <div className="carImg">
        <img src={img || "default-image-path.png"} alt="Car" />
        <span>{price} $</span>
      </div>
      <div className="carnName">{NameCar}</div>
      <div className="carDetails">
        <i className="fas fa-gas-pump">
          <span>Fuel: {fuel}</span>
        </i>
        <i className="fas fa-car">
          <span>Engine: {engine}</span>
        </i>
        <i className="fas fa-power-off">
          <span>Power: {power}</span>
        </i>
        <i className="fas fa-cog">
          <span>Transmission: {trans}</span>
        </i>
      </div>
      <div className="btnStyled">
        <Link
          className="detailsBtn"
          to="/recentlyAdded/detailcar"
          style={{ textDecoration: "none" }}
        >
          <button style={{ display: display1 }}>{detailesBtn}</button>
        </Link>
        <Link
          className="detailsBtn"
          to="/edit-page"
          style={{ textDecoration: "none" }}
        >
          <button style={{ display: display2 }}>{editBtn}</button>
        </Link>
        <Link
          className="detailsBtn"
          to="/delete-page"
          style={{ textDecoration: "none" }}
        >
          <button style={{ display: display3 }}>{deleteBtn}</button>
        </Link>
      </div>
    </div>
  );
};

export default RecentlyCard;
