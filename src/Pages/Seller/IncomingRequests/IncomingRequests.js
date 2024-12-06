import React from "react";
import NavBar from "../../../Components/Uitily/NavBar";
import TitleSection from "../../../Components/Uitily/TitleSection";
import Table from "../../../Components/Table/Table";
import Footer from "../../../Components/Uitily/Footer";

const IncomingRequests = () => {
  return (
    <div>
      <NavBar
        link1="My Profile"
        link2="Car management"
        link3="Incoming requests"
        link4="Messages"
        to1="/Seller/SellerProfile"
        to2="/Seller/CarManagement"
        to3="/Seller/IncomingRequests"
        to4="/Seller/Messages"
      />
      <TitleSection title="Incoming Requests" />
      <Table />
      <Footer />
    </div>
  );
};

export default IncomingRequests;
