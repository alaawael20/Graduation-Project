import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import Logo from '../../Images/Logo.png'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <Container className='my-5'>
      <Row className='py-5'>
        <Col xl= "6" lg= "6"  sm= "12" className='mt-3 pt-3'>
          <div className='titlePage'>Sign In</div>
          <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" size="md" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" size="md" placeholder="Password" />
          </Form.Group>
            <Form.Group className="mb-3 d-flex justify-content-center" controlId="exampleForm.ControlTextarea1">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Button variant="primary">Submit</Button>
                </Link>
            </Form.Group>
            <Link to="/register" style={{ textDecoration: "none", color: "black" }} className='d-flex justify-content-center'>
                <span className='ms-4 fs-6 fw-bold text-center'>Don't have an account?</span>
            </Link>
          </Form>
        </Col>
        <Col xl= "6" lg= "6"  sm= "12" className='contactSide'>
          <img src={Logo} alt='ContactPic' className='contactImg'/>
        </Col>
      </Row>
    </Container>
  )
}

export default LoginPage