import React from "react";
import NavBar from "../../Components/Uitily/NavBar";
import b8 from "../../Images/Brands/b8.png";
import b2 from "../../Images/Brands/b2.png";
import b3 from "../../Images/Brands/b3.png";
import b4 from "../../Images/Brands/b4.png";
import b5 from "../../Images/Brands/b5.png";
import b6 from "../../Images/Brands/b6.png";
import b7 from "../../Images/Brands/b7.png";
import b9 from "../../Images/Brands/b9.png";
import b10 from "../../Images/Brands/b10.png";
import b11 from "../../Images/Brands/b11.png";
import b12 from "../../Images/Brands/b12.png";
import b13 from "../../Images/Brands/b13.png";
import Pagination from "../../Components/Uitily/Pagination";
import Footer from "../../Components/Uitily/Footer";

const BrandsPage = () => {
  return (
    <div>
      <NavBar link1="Home" link2="About" link3="Services" link4="Contact Us" />
      <div className="titlePage">Brands</div>
      <div className="containerPage brands mt-4">
        <img src={b8} alt="Brand" />
        <img src={b2} alt="Brand" />
        <img src={b3} alt="Brand" />
        <img src={b4} alt="Brand" />
        <img src={b5} alt="Brand" />
        <img src={b6} alt="Brand" />
        <img src={b7} alt="Brand" />
        <img src={b9} alt="Brand" />
        <img src={b10} alt="Brand" />
        <img src={b11} alt="Brand" />
        <img src={b12} alt="Brand" />
        <img src={b13} alt="Brand" />
      </div>
      <Pagination />
      <Footer />
    </div>
  );
};

export default BrandsPage;
