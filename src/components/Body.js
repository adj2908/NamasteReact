import RestuarantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LIST_REST_API_URL } from "../utils/constants";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(LIST_REST_API_URL);
    const json = await data.json();
    setRestaurantList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurantList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <React.Fragment>
      <div>
        <input
          type="text"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            console.log(searchValue);
            const filteredRestaurant = restaurantList.filter((res) =>
              res.info.name.toLowerCase().includes(searchValue.toLowerCase())
            );
            console.log(filteredRestaurant);
            setFilteredRestaurantList(filteredRestaurant);
          }}
        >
          Search
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredData = restaurantList.filter(
              (restuarant) => restuarant.info.avgRating > 4.1
            );
            setFilteredRestaurantList(filteredData);
          }}
        >
          Filter Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurantList.map((restuarant) => (
          <Link
            key={restuarant.info.id}
            to={"./restaurants/" + restuarant.info.id}
          >
            <RestuarantCard resData={restuarant} />
          </Link>
        ))}
      </div>
    </React.Fragment>
  );
};
export default Body;
