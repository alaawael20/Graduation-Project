import React from 'react';
import NavBar from '../../Components/Uitily/NavBar';
import { Col, Container, Row } from 'react-bootstrap';
import ServiceCard from './../../Components/Services/ServiceCard';
import Pagination from '../../Components/Uitily/Pagination';
import Footer from '../../Components/Uitily/Footer';
import { ServicesData } from '../../mock/ServicesData';

const ServicesPage = () => {
  const itemsPerRow = 4;
  const rows = [];

  for (let i = 0; i < ServicesData.length; i += itemsPerRow) {
    rows.push(ServicesData.slice(i, i + itemsPerRow));
  }

  return (
    <div>
      <NavBar />
      <div className='titlePage'>Services</div>
      <Container>
        {rows.map((row, rowIndex) => (
          <Row className='mt-4' key={rowIndex}>
            {row.map(service => (
              <Col md={3} className='d-flex justify-content-center align-items-center mb-3'>
                <ServiceCard 
                  key={service.id}
                  title={service.title}
                  details={service.details}
                />
              </Col>
            ))}
          </Row>
        ))}
      </Container>
      <Pagination />
      <Footer />
    </div>
  );
}

export default ServicesPage;
