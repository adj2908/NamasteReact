import { CDN_URL } from "../utils/constants";

const RestuarantCard = (props) => {
  const { name, avgRating, costForTwo, cloudinaryImageId, cuisines } =
    props.resData.info;
  return (
    <div className="res-card">
      <img className="res-image" src={CDN_URL + cloudinaryImageId} />
      <h1>{name}</h1>
      <h2>{avgRating}</h2>
      <h2>{costForTwo}</h2>
      <h2>{cuisines.join(", ")}</h2>
    </div>
  );
};
export default RestuarantCard;
