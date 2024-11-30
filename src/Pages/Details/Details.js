import React from 'react'
import NavBar from '../../Components/Uitily/NavBar'
import CarDetails from '../../Components/Details/CarDetails'
import Footer from '../../Components/Uitily/Footer'

const Details = () => {
  return (
    <div>
        <NavBar/>
        <div className='titlePage'>Details</div>
        <CarDetails/>
        <Footer/>
    </div>
  )
}

export default Details