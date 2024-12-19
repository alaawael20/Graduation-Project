import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import car1 from "../../Images/car1.jpg";
import { Link } from "react-router-dom";
import "./CarDetails.css";
import { toast, ToastContainer } from "react-toastify";

const CarDetails = () => {
  const addFavourite = (values) => {
    console.log("Added Car Is Done:", values);
    toast.success("Added To Favourites... 🚗 ", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  };
  return (
    <div className="car-details-container">
      <Row className="my-4">
        <Col md="6" sm="12" className="car-image-container">
          <img src={car1} className="car-image" alt="Car" />
        </Col>
        <Col md="6" sm="12" className="car-info-container">
          <div className="car-info">
            <h3>About the Citroen C100</h3>
            <p>
              We have this eye-catching Fiat 500, owned by Perrys since new with
              only delivery mileage. It comes equipped with a touchscreen
              Bluetooth DAB radio, rear parking sensors, auto start-stop
              technology, and more.
            </p>
          </div>

          <div className="car-features">
            <h3>Key Features</h3>
            <table className="features-table">
              <tbody>
                <tr>
                  <td>
                    <i className="fas fa-calendar-alt feature-icon" /> Reg: 2014
                    (64)
                  </td>
                  <td>
                    <i className="fas fa-cog feature-icon" /> Gearbox: Automatic
                  </td>
                </tr>
                <tr>
                  <td>
                    <i className="fas fa-clock feature-icon" /> Mileage: 21,000
                  </td>
                  <td>
                    <i className="fas fa-gas-pump feature-icon" /> Petrol
                  </td>
                </tr>
                <tr>
                  <td>
                    <i className="fas fa-fan feature-icon" /> Special - Smooth
                    mint
                  </td>
                  <td>
                    <i className="fas fa-registered feature-icon" /> OU69NBX
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="car-finance">
            <h3>Finance Examples</h3>
            <h5>Get a great deal at low rates</h5>
            <p>Interest rate: 3.1%</p>
            <p>Per month: $327</p>
            <p>APR Representative: 7.7%</p>
          </div>
        </Col>
      </Row>

      <Row className="vehicle-description">
        <Col md="6" sm="12" className="vehicle-info">
          <h3>About this vehicle</h3>
          <p>
            4WD, Automatic, Diesel SUV. Very Low 21,485 miles, Full LAND ROVER
            Service History, Exceptionally well cared for by ONE private owner,
            Full Black grained LEATHER upholstery, Heated front seats, and more.
          </p>
        </Col>
        <Col md="6" sm="12" className="vehicle-details">
          <h3>More details about this car</h3>
          <table className="details-table">
            <tbody>
              <tr>
                <td>
                  <strong>Date of Registration:</strong>
                </td>
                <td>2014 (64)</td>
              </tr>
              <tr>
                <td>
                  <strong>Mileage:</strong>
                </td>
                <td>21,000</td>
              </tr>
              <tr>
                <td>
                  <strong>Exterior Colour:</strong>
                </td>
                <td>White</td>
              </tr>
              <tr>
                <td>
                  <strong>Type of Paint:</strong>
                </td>
                <td>Metallic paint</td>
              </tr>
              <tr>
                <td>
                  <strong>Reference number:</strong>
                </td>
                <td>BAC2205594</td>
              </tr>
              <tr>
                <td>
                  <strong>Engine size:</strong>
                </td>
                <td>2.2</td>
              </tr>
              <tr>
                <td>
                  <strong>Four-wheel drive:</strong>
                </td>
                <td>Yes</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>

      <div className="btn_style">
        <Link to="/recentlyAdded/detailcar/booknow" className="book-now-link">
          <Button className="book-now-btn">
            <i className="fas fa-shopping-cart" />
            <span className="book-now-text">Book Now</span>
          </Button>
        </Link>
        <Button className="book-now-btn" onClick={addFavourite}>
          <i class="fab fa-gratipay"></i>
          <span className="book-now-text">Add to favourite</span>
        </Button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default CarDetails;
