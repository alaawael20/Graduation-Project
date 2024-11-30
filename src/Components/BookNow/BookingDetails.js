import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import car1 from '../../Images/car1.jpg'

const BookingDetails = () => {
  return (
    <div className='mx-5'>
        <Row className='my-4'>
            <Col lg="6" md="5" className='purchaseImg'><img src={car1} alt='Car'/></Col>
            <Col lg="6" md="7">
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Alaa" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Wael" />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="alaa@testcom" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" placeholder="000 0000 000" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>State</Form.Label>
                    <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                    </Form.Group>
                </Row>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label as="legend" column sm={2}>
                        Payment
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Check
                        type="radio"
                        label="Cash"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                        />
                        <Form.Check
                        type="radio"
                        label="Credit Card"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                        />
                    </Col>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </Col>
        </Row>
    </div>
  )
}

export default BookingDetails