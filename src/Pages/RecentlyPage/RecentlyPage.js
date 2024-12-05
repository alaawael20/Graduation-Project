import React from "react";
import NavBar from "../../Components/Uitily/NavBar";
import RecentlyCard from "../../Components/RecentlyAdd/RecentlyCard";
import Footer from "../../Components/Uitily/Footer";
import Pagination from "../../Components/Uitily/Pagination";
import { RecentAddCardData } from "../../mock/RecentAddCardData";

const RecentlyPage = () => {
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
      <div className="titlePage">Recently Added</div>
      <div className="containerPage cards my-5">
        {RecentAddCardData.map((card) => (
          <RecentlyCard
            key={card.id}
            price={card.price}
            NameCar={card.nameCar}
            fuel={card.fuel}
            engine={card.engine}
            power={card.power}
            trans={card.trans}
            img={card.img}
            detailesBtn="Details"
            display2="none"
            display3="none"
          />
        ))}
      </div>
      <Pagination />
      <Footer />
    </div>
  );
};

export default RecentlyPage;
