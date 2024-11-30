import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

const Filter = () => {
  return (
    <Form className='container my-5'>

      <Row className="mb-3" lg="4" md="3" sm="2" xs="1">

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Make</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option value="Choose">Choose...</option>
            <option value="ACURA">ACURA</option>
            <option value="ASTON MARTIN">ASTON MARTIN</option>
            <option value="AUDI">AUDI</option>
            <option value="BENTLEY">BENTLEY</option>
            <option value="BMW">BMW</option>
            <option value="BUICK">BUICK</option>
            <option value="CADILLAC">CADILLAC</option>
            <option value="CHEVROLET">CHEVROLET</option>
            <option value="CHRYSLER">CHRYSLER</option>
            <option value="DODGE">DODGE</option>
            <option value="FERRARI">FERRARI</option>
            <option value="FORD">FORD</option>
            <option value="GMC">GMC</option>
            <option value="HONDA">HONDA</option>
            <option value="HUMMER">HUMMER</option>
            <option value="HYUNDAI">HYUNDAI</option>
            <option value="INFINITI">INFINITI</option>
            <option value="ISUZU">ISUZU</option>
            <option value="JAGUAR">JAGUAR</option>
            <option value="JEEP">JEEP</option>
            <option value="KIA">KIA</option>
            <option value="LAMBORGHINI">LAMBORGHINI</option>
            <option value="LAND ROVER">LAND ROVER</option>
            <option value="LEXUS">LEXUS</option>
            <option value="LINCOLN">LINCOLN</option>
            <option value="LOTUS">LOTUS</option>
            <option value="MASERATI">MASERATI</option>
            <option value="MAYBACH">MAYBACH</option>
            <option value="MAZDA">MAZDA</option>
            <option value="MERCEDES-BENZ">MERCEDES-BENZ</option>
            <option value="MERCURY">MERCURY</option>
            <option value="MINI">MINI</option>
            <option value="MITSUBISHI">MITSUBISHI</option>
            <option value="NISSAN">NISSAN</option>
            <option value="PONTIAC">PONTIAC</option>
            <option value="PORSCHE">PORSCHE</option>
            <option value="ROLLS-ROYCE">ROLLS-ROYCE</option>
            <option value="SAAB">SAAB</option>
            <option value="SATURN">SATURN</option>
            <option value="SUBARU">SUBARU</option>
            <option value="SUZUKI">SUZUKI</option>
            <option value="TOYOTA">TOYOTA</option>
            <option value="VOLKSWAGEN">VOLKSWAGEN</option>
            <option value="VOLVO">VOLVO</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Model</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option value="Choose">Choose...</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
            <option value="2011">2011</option>
            <option value="2010">2010</option>
            <option value="2009">2009</option>
            <option value="2008">2008</option>
            <option value="2007">2007</option>
            <option value="2006">2006</option>
            <option value="2005">2005</option>
            <option value="2004">2004</option>
            <option value="2003">2003</option>
            <option value="2002">2002</option>
            <option value="2001">2001</option>
            <option value="2000">2000</option>
            <option value="1999">1999</option>
            <option value="1998">1998</option>
            <option value="1997">1997</option>
            <option value="1996">1996</option>
            <option value="1995">1995</option>
            <option value="1994">1994</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Minimum price</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>5000$</option>
            <option>5000$</option>
            <option>5000$</option>
            <option>5000$</option>
            <option>5000$</option>
            <option>5000$</option>
            <option>5000$</option>
            <option>5000$</option>
            <option>5000$</option>
            <option>5000$</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Maximum price</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
            <option>5000$</option>
            <option>5000$</option>
            <option>5000$</option>
            <option>5000$</option>
            <option>5000$</option>
            <option>5000$</option>
            <option>5000$</option>
            <option>5000$</option>
            <option>5000$</option>
            <option>5000$</option>
          </Form.Select>
        </Form.Group>

      </Row>

      <Row className="mb-3" lg="3" md="2" xs="1">

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Body types</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>SUVs</option>
            <option>Hatchbacks</option>
            <option>Saloons</option>
            <option>Coupes</option>
            <option>Estate cars</option>
            <option>People carriers</option>
            <option>Sports cars</option>
            <option>Convertibles</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>fuel type</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>Petrol</option>
            <option>Diesel</option>
            <option>Electric</option>
            <option>Hybrid</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>What's the minimum boot space you need?</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>1 suitcase (120 liters)</option>
            <option>2 suitcase (240 liters)</option>
            <option>3 suitcase (360 liters)</option>
            <option>4 suitcase (480 liters)</option>
            <option>5+ suitcase (600 liters)</option>
          </Form.Select>
        </Form.Group>

      </Row>

      <div className='d-flex justify-content-center mt-4'>
        <Button variant="primary">Search</Button>
      </div>
    </Form>
  )
}

export default Filter