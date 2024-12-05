import React from "react";
import NavBar from "../../../Components/Uitily/NavBar";
import ProfilePage from "../../../Components/ProfilePage/ProfilePage";
import Footer from "../../../Components/Uitily/Footer";
import Statistics from "../../../Components/Statistics/Statistics";

const SallerProfile = () => {
  return (
    <div>
      <NavBar
        link1="My Profile"
        link2="Car management"
        link3="Incoming requests"
        link4="Messages"
        to1="/saller/sallerProfile"
        to2="/saller/CarManagement"
        to3="/incoming-requests"
        to4="/messages"
      />
      <ProfilePage
        name="Alaa El-faqawi"
        jop="Saller"
        email="alaaelfaqawi2001@gmail.com"
        phone="0598194288"
        mobile="(970) 59-819-4288"
        address="Khanyonis, Gaza Strip, Palestine"
      />
      <Statistics />
      <Footer />
    </div>
  );
};

export default SallerProfile;
