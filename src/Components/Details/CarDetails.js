import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import car1 from '../../Images/car1.jpg'
import { Link } from 'react-router-dom'


const CarDetails = () => {
  return (
    <div className='mx-5'>
            <Row className='my-4'>
                <Col md="6" sm="7" xs="12"><img src={car1} className='detailsImg' alt='Car' width='500' height='350'/></Col>
                <Col md="6" sm="5" xs="0">
                    <Row className='detailsAbout'>
                        <h3>About the Citroen C100</h3>
                        <p>We have this eye-catching Fiat 500 which has been owned by Perrys since new with only delivery mileage on it. It comes equipped with a touchscreen Bluetooth DAB radio with handsfree calling, rear parking sensors, auto start-stop technology, city steering drive mode, electric windows and a fixed glass sun roof.</p>
                    </Row>
                    <Row>
                        <h3>Key Features</h3>
                        <Col>
                            <Row className='mb-3'><i class="fas fa-calendar-alt featursIcon"><span className='ms-3 featursSpan'>Reg: 2014 (64)</span></i></Row>
                            <Row className='mb-3'><i class="fas fa-cog featursIcon"><span className='ms-3 featursSpan'>Gearbox: Automatic</span></i></Row>
                            <Row className='mb-3'><i class="fas fa-clock featursIcon"><span className='ms-3 featursSpan'>Mileage: 21,000</span></i></Row>
                        </Col>
                        <Col>
                            <Row className='mb-3'><i class="fas fa-gas-pump featursIcon"><span className='ms-3 featursSpan'>Petrol</span></i></Row>
                            <Row className='mb-3'><i class="fas fa-fan featursIcon"><span className='ms-3 featursSpan'>Special - Smooth mint</span></i></Row>
                            <Row className='mb-3'><i class="fas fa-registered featursIcon"><span className='ms-3 featursSpan'>OU69NBX</span></i></Row>
                        </Col>
                    </Row>
                    <Row>
                        <h3>Finance examples for this car</h3>
                        <h5>Get a great deal at low rates</h5>
                        <div>
                            <p className='finance'>Interest rate: 3.1%</p>
                            <p className='finance'>Per month: 327$</p>
                            <p className='finance'>APR Representative: 7.7%</p>
                        </div>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col md="6" sm="7" xs="12">
                    <Row>
                        <h3 className='detailAbout'>About this vehicle</h3>
                        <p>4WD, Automatic, Diesel SUV / Estate, Very Low 21,485 miles, Full LAND ROVER Service History (recent service), Exceptionally well cared for by ONE private owner in color coded solid WHITE, 5 seats in FULL Black grained LEATHER upholstery, Power operated Driver and Passenger seat adjusts with driver memory, 3 bar HEATED Front seats, Front and Rear storage / CUP holder facility center arm rests, folding rear seats - 3-3x3 point rear seat belts - ISOFIX anchor points, twin Front and Side air bags, CURTAIN air bags, Head restraints, Key less Button Stop/Start technology system, Eco / Sport Automatic (9), epas, abs, ESP (Electronic stability program).</p>
                    </Row>
                </Col>
                <Col md="6" sm="7" xs="12">
                    <Row>
                        <h3>More details about this car</h3>
                        <p><b className='detailsColor'>Date of Registration:</b> 2014 (64)<br/>
                        <b className='detailsColor'>Mileage since new:</b> 21,000<br/>
                        <b className='detailsColor'>The exterior colour:</b> White<br/>
                        <b className='detailsColor'>Type of paint:</b> Metallic paint<br/>
                        <b className='detailsColor'>Registration date:</b> 2014-12-03<br/>
                        <b className='detailsColor'>Reference number :</b> BAC2205594, Engine size : 2.2, Four wheel drive : true.<br/>
                        <b className='detailsColor'>Is this vehicle an updated facelift model:</b> Newer facelift model<br/>
                        <b className='detailsColor'>Is this a UK vehicle:</b> Yes<br/>
                        <b className='detailsColor'>Number of months until the MOT expires:</b> More than 8 months<br/>
                        <b className='detailsColor'>Date of when the next service is due:</b> Recently serviced</p>
                    </Row>
                </Col>
            </Row>
            <Link to="/recentlyAdded/detailcar/booknow" style={{ textDecoration: "none" }}>
                <div className='d-flex justify-content-center my-5'><Button><i class="fas fa-shopping-cart"><span className='ps-3'>Book Now</span></i></Button></div>
            </Link>
    </div>
  )
}

export default CarDetails