import React from 'react'
import { Card } from 'react-bootstrap'

const ServiceCard = ({title, details}) => {
  return (
    <Card style={{ width: '18rem', height: '12rem', marginRight: '20px' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {details}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ServiceCard