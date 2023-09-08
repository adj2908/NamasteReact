import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useFetchMenu from "../utils/useFetchMenu";

const Restaurants = () => {
  const { resId } = useParams();
  const restaurantInfo = useFetchMenu(resId);

  if (restaurantInfo == null) {
    return <Shimmer />;
  }
  const { name, avgRating, costForTwoMessage } =
    restaurantInfo.data.cards[0].card.card.info;

  const { itemCards } =
    restaurantInfo.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      ?.card?.card;

  return (
    <div>
      <div className="restaurant-info">
        <h1>{name}</h1>
        <h2>{avgRating}</h2>
        <h3>{costForTwoMessage}</h3>
      </div>
      <div className="restaurant-menu-items">
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} -{" Rs."}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Restaurants;
