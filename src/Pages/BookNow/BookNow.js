import React from 'react'
import NavBar from '../../Components/Uitily/NavBar'
import BookingDetails from '../../Components/BookNow/BookingDetails'
import Footer from '../../Components/Uitily/Footer'

const BookNow = () => {
  return (
    <div>
        <NavBar/>
        <div className='titlePage'>Complete the purchase</div>
        <BookingDetails/>
        <Footer/>
    </div>
  )
}

export default BookNow