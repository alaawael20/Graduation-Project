import React from "react";
import NavBar from "../../Components/Uitily/NavBar";
import { Button, Col, Form, Row } from "react-bootstrap";
import forContact from "../../Images/forContact.jpg";
import Footer from "../../Components/Uitily/Footer";
import "./ContactPage.css";

const Contact = () => {
  return (
    <div>
      <NavBar
        link1="Home"
        link2="About"
        link3="Services"
        link4="Contact Us"
        to1="/"
        to2="/aboutus"
        to3="/services"
        to4="/contactus"
      />
      <div className="contact-title">Talk To Us</div>
      <div className="contact-container my-3">
        <Row>
          <Col xl="6" lg="6" sm="12" className="contact-side">
            <Form>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" size="md" placeholder="Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  size="md"
                  placeholder="name@example.com"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>What would you like to discuss?</Form.Label>
                <Form.Control
                  as="textarea"
                  size="md"
                  placeholder="Your Message"
                  style={{ height: "200px", resize: "none" }}
                />
              </Form.Group>
              <Form.Group
                className="mb-3 d-flex justify-content-center"
                controlId="formSubmit"
              >
                <Button variant="primary">Submit</Button>
              </Form.Group>
            </Form>
          </Col>
          <Col xl="6" lg="6" sm="12" className="contact-side">
            <img src={forContact} alt="ContactPic" className="contact-img" />
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
