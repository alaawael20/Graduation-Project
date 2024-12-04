import React from "react";
import NavBar from "../../Components/Uitily/NavBar";
import BookingDetails from "../../Components/BookNow/BookingDetails";
import Footer from "../../Components/Uitily/Footer";

const BookNow = () => {
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
      <div className="titlePage">Complete the purchase</div>
      <BookingDetails />
      <Footer />
    </div>
  );
};

export default BookNow;
