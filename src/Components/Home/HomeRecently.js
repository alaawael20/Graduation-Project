import React from "react";
import TitleSection from "../Uitily/TitleSection";
import RecentlyCard from "../RecentlyAdd/RecentlyCard";
import { Link } from "react-router-dom";
import { RecentCardData } from "../../mock/RecentCardData";

const HomeRecently = () => {
  return (
    <div>
      <TitleSection title="Recently Added" />
      <div className="containerPage cards">
        {RecentCardData.map((card) => (
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
      <div class="moreBtn">
        <Link to="/recentlyAdded" style={{ textDecoration: "none" }}>
          <button className="mt-4">More</button>
        </Link>
      </div>
    </div>
  );
};

export default HomeRecently;
