import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Logo from "../../Images/Logo.png";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <Container className="my-5">
      <Row className="shadow-lg p-4 rounded align-items-center">
        <Col xl="6" lg="6" sm="12" className="mt-3 pt-3">
          <div className="titlePage text-center mb-4 fs-2 fw-bold text-primary">
            Sign In
          </div>
          <Form>
            <Form.Group className="mb-4" controlId="formEmail">
              <Form.Label className="fs-5 fw-bold">Email Address</Form.Label>
              <Form.Control
                type="email"
                size="lg"
                placeholder="Enter your email"
                className="rounded-3"
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formPassword">
              <Form.Label className="fs-5 fw-bold">Password</Form.Label>
              <Form.Control
                type="password"
                size="lg"
                placeholder="Enter your password"
                className="rounded-3"
              />
            </Form.Group>
            <Link to="/">
              <Form.Group className="mb-4 d-flex justify-content-center">
                <Button
                  variant="primary"
                  size="lg"
                  className="px-5 py-2 rounded-3"
                >
                  Log In
                </Button>
              </Form.Group>
            </Link>
            <Link
              to="/register"
              style={{ textDecoration: "none", color: "black" }}
              className="d-flex justify-content-center"
            >
              <span className="ms-4 fs-6 fw-bold text-center">
                Don't have an account?{" "}
                <span className="text-primary">Register</span>
              </span>
            </Link>
          </Form>
        </Col>
        <Col
          xl="6"
          lg="6"
          sm="12"
          className="d-flex justify-content-center align-items-center"
        >
          <img
            src={Logo}
            alt="ContactPic"
            className="img-fluid"
            style={{ maxWidth: "80%", borderRadius: "15px" }}
          />
        </Col>
      </Row>
      <Row className="text-center mt-5">
        <Col>
          <Link
            to="/Seller/SellerProfile"
            style={{
              textDecoration: "none",
              margin: "10px",
              padding: "15px 30px",
              backgroundColor: "#007BFF",
              color: "#fff",
              borderRadius: "5px",
              fontSize: "18px",
              display: "inline-block",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
          >
            Login As A Seller
          </Link>
        </Col>
        <Col>
          <Link
            to="/buyer/buyerProfile"
            style={{
              textDecoration: "none",
              margin: "10px",
              padding: "15px 30px",
              backgroundColor: "#28A745",
              color: "#fff",
              borderRadius: "5px",
              fontSize: "18px",
              display: "inline-block",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
          >
            Login As A Buyer
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
