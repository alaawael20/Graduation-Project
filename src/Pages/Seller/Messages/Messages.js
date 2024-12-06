import React from "react";
import NavBar from "../../../Components/Uitily/NavBar";
import Chat from "../../../Components/Chat/Chat";
import Footer from "../../../Components/Uitily/Footer";

const Messages = () => {
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
        to4="/Seller/messages"
      />
      <Chat />
      <Footer />
    </div>
  );
};

export default Messages;
