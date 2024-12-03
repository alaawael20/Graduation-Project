import React from "react";
import NavBar from "../../Components/Uitily/NavBar";
import Filter from "../../Components/Search/FilterCar";
import Footer from "../../Components/Uitily/Footer";

const Search = () => {
  return (
    <div>
      <NavBar link1="Home" link2="About" link3="Services" link4="Contact Us" />
      <div className="titlePage">Find Suitable Auto For You</div>
      <Filter />
      <Footer />
    </div>
  );
};

export default Search;
