import React from "react";
import ProfilePage from "../../../Components/ProfilePage/ProfilePage";
import NavBar from "../../../Components/Uitily/NavBar";
import Statistics from "../../../Components/Statistics/Statistics";
import Footer from "../../../Components/Uitily/Footer";
import myprofile from "../../../Images/myprofile.jpg";

const BuyerProfile = () => {
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
      <ProfilePage
        name="Alaa Wael"
        state="Buyer"
        email="alaa@example.com"
        phone="0555-555-5555"
        mobile="(123) 456-7890"
        address="123 Main St, Anytown, USA"
        profileImage={myprofile}
      />
      <Statistics
        statisticsIcon1={
          <i class="fas fa-envelope fa-3x text-primary mb-3"></i>
        }
        statisticsIcon2={<i class="fas fa-heart fa-3x text-success mb-3"></i>}
        statisticsIcon3={
          <i class="fas fa-shopping-cart fa-3x text-danger mb-3"></i>
        }
        head1="Messages"
        head2="Favorite"
        head3="Orders"
        num1="5"
        num2="20"
        num3="3"
      />
      <Footer />
    </div>
  );
};

export default BuyerProfile;
