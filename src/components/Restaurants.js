import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { REST_INFO_API_URL } from "../utils/constants";

const Restaurants = () => {
  const [restaurantInfo, setRestaurantInfo] = useState();
  const { resId } = useParams();

  useEffect(() => {
    fetchRestaurantsInfo();
  }, []);
  const fetchRestaurantsInfo = async () => {
    const response = await fetch(REST_INFO_API_URL + resId);
    const json = await response.json();
    setRestaurantInfo(json);
  };

  if (restaurantInfo == null) {
    return <Shimmer />;
  }
  const { name, avgRating, costForTwoMessage } =
    restaurantInfo.data.cards[0].card.card.info;

  const menu =
    restaurantInfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1];
  console.log(menu.card);

  return (
    <div>
      <div className="restaurant-info">
        <h1>{name}</h1>
        <h2>{avgRating}</h2>
        <h3>{costForTwoMessage}</h3>
      </div>
      <div className="restaurant-menu-items">
        {/* {menu.map((items) => (
          <p></p>
        ))} */}
      </div>
    </div>
  );
};

export default Restaurants;
