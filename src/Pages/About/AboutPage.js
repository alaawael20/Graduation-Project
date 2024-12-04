import React from "react";
import NavBar from "../../Components/Uitily/NavBar";
import Footer from "../../Components/Uitily/Footer";
import car9 from "../../Images/car9.jpg";

const AboutPage = () => {
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
      <div className="titlePage">About Us</div>
      <div className="containerPage aboutContent my-4">
        <div>
          <p className="p1">
            At Auto Dealz Car, we're passionate about cars and dedicated to
            providing our customers with the highest-quality products and
            services. Since 1995, we've been serving car enthusiasts and
            mechanics alike with a wide range of products, including OEM and
            aftermarket parts, accessories, and tools.
          </p>
          <p className="p2">
            Our mission is simple: to help our customers get the most out of
            their vehicles by providing reliable, top-quality parts at
            competitive prices. Whether you're looking to upgrade your car's
            performance, repair a damaged part, or simply find a replacement for
            a worn-out component, we've got you covered.
            <br />
            What sets us apart from other car and spare parts stores is our
            commitment to customer service. Our experienced and knowledgeable
            staff are passionate about cars and are always happy to help
            customers find the products they need. We take the time to
            understand our customers' needs and provide personalized advice and
            recommendations to ensure they get the right parts for their
            specific vehicle.
          </p>
        </div>
        <div className="aboutImg">
          <img src={car9} alt="car" />
          <p className="p2">
            We're also proud to be active members of our community. We sponsor
            local car shows and events, and we're committed to reducing our
            environmental impact through responsible business practices.
          </p>
          <p className="p2">
            If you're looking for a reliable, customer-focused car and spare
            parts store, look no further than Auto Dealz Car. Contact us today
            to learn more about our products and services.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
