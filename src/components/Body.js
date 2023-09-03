import RestuarantCard from "./RestaurantCard";
import { resData } from "../utils/mockData";
import React, { useState } from "react";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(resData);
  return (
    <React.Fragment>
      <button
        className="filter-btn"
        onClick={() => {
          const filteredData = restaurantList.filter(
            (restuarant) => restuarant.info.avgRating > 4.1
          );
          console.log(filteredData);
          setRestaurantList(filteredData);
        }}
      >
        Filter Restaurants
      </button>
      <div className="res-container">
        {restaurantList.map((restuarant) => (
          <RestuarantCard key={restuarant.info.id} resData={restuarant} />
        ))}
      </div>
    </React.Fragment>
  );
};
export default Body;
