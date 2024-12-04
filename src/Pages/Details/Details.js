import React from "react";
import NavBar from "../../Components/Uitily/NavBar";
import CarDetails from "../../Components/Details/CarDetails";
import Footer from "../../Components/Uitily/Footer";

const Details = () => {
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
      <div className="titlePage">Details</div>
      <CarDetails />
      <Footer />
    </div>
  );
};

export default Details;
