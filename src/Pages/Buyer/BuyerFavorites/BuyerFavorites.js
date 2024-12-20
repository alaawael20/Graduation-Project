import React from "react";
import NavBar from "../../../Components/Uitily/NavBar";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./BuyerFavorites.css";
import { FavoriteCar } from "../../../mock/FavoriteCar";
import Footer from "../../../Components/Uitily/Footer";

const BuyerFavorites = () => {
  return (
    <div>
      <NavBar
        link1="My Profile"
        link2="Messages"
        link3="Favorites"
        link4="Orders"
        to1="/buyer/buyerProfile"
        to2="/buyer/messages"
        to3="/buyer/favorites"
        to4="/buyer/orders"
      />
      <Container className="favorites-container">
        <h2 className="favorites-title">Favorite Cars</h2>
        <Row>
          {FavoriteCar.map((car) => (
            <Col md={4} key={car.id}>
              <Card className="favorite-card" style={{ height: "400px" }}>
                <div className="image-container">
                  <Card.Img variant="top" src={car.img} alt={car.nameCar} />
                </div>
                <Card.Body className="card-body-custom">
                  <Card.Title>{car.nameCar}</Card.Title>
                  <Card.Text>{car.description}</Card.Text>
                  <div className="btn-container">
                    <button className="custom-btn">View Details</button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default BuyerFavorites;
