import React from "react";
import NavBar from "../../../Components/Uitily/NavBar";
import ProfilePage from "../../../Components/ProfilePage/ProfilePage";
import Footer from "../../../Components/Uitily/Footer";
import Statistics from "../../../Components/Statistics/Statistics";
import myprofile from "../../../Images/myprofile.jpg";

const SellerProfile = () => {
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
      <ProfilePage
        name="Alaa El-faqawi"
        state="Seller"
        email="alaaelfaqawi2001@gmail.com"
        phone="0598194288"
        mobile="(970) 59-819-4288"
        address="Khanyonis, Gaza Strip, Palestine"
        profileImage={myprofile}
      />
      <Statistics
        statisticsIcon1={
          <i class="fas fa-envelope fa-3x text-primary mb-3"></i>
        }
        statisticsIcon2={
          <i class="fas fa-shopping-cart fa-3x text-success mb-3"></i>
        }
        statisticsIcon3={<i class="fas fa-car fa-3x text-danger mb-3"></i>}
        head1="Messages"
        head2="Sales"
        head3="Cars"
        num1="25"
        num2="150"
        num3="50"
      />
      <Footer />
    </div>
  );
};

export default SellerProfile;
