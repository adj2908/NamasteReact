import { useState, useEffect } from "react";
import { REST_INFO_API_URL } from "../utils/constants";

const useFetchMenu = (resId) => {
  const [restaurantInfo, setRestaurantInfo] = useState();
  useEffect(() => {
    fetchRestaurantsInfo();
  }, []);
  const fetchRestaurantsInfo = async () => {
    const response = await fetch(REST_INFO_API_URL + resId);
    const json = await response.json();
    setRestaurantInfo(json);
  };
  return restaurantInfo;
};

export default useFetchMenu;
