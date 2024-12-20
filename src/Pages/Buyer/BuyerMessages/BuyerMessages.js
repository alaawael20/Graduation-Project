import React from "react";
import NavBar from "../../../Components/Uitily/NavBar";
import Chat from "../../../Components/Chat/Chat";
import Footer from "../../../Components/Uitily/Footer";

const BuyerMessages = () => {
  return (
    <div>
      <NavBar
        link1="My Profile"
        link2="Messages"
        link3="Favorites"
        link4="Orders"
        to1="/buyer/buyerProfile"
        to2="/buyer/messages"
        to3="/buyer/favorites"
        to4="/buyer/orders"
      />
      <Chat state="Seller" />
      <Footer />
    </div>
  );
};

export default BuyerMessages;
