import React from 'react'
import NavBar from '../../Components/Uitily/NavBar'
import { Button, Col, Form, Row } from 'react-bootstrap'
import forContact from '../../Images/forContact.jpg'
import Footer from '../../Components/Uitily/Footer'

const Contact = () => {
  return (
    <div>
        <NavBar/>
        <div className='titlePage'>Talk To Us</div>
        <div className='container my-3'>
            <Row>
                <Col xl= "6" lg= "6"  sm= "12" className='contactSide'>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="text" size="md" placeholder="Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" size="md" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>What would you like to discuss?</Form.Label>
                            <Form.Control as="textarea" size="md" placeholder="Your Message" style={{ height: '200px', resize: "none" }}/>
                        </Form.Group>
                        <Form.Group className="mb-3 d-flex justify-content-center" controlId="exampleForm.ControlTextarea1">
                            <Button variant="primary">Submit</Button>
                        </Form.Group>
                    </Form>
                </Col>
                <Col xl= "6" lg= "6" sm= "12" className='contactSide'>
                    <img src={forContact} alt='ContactPic' className='contactImg'/>
                </Col>
            </Row>
        </div>
        <Footer/>
    </div>
  )
}

export default Contact