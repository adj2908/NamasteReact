import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="header">
    <img className="app-logo" src={LOGO_URL} />
    <ul className="header-list">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
      <li>Cart</li>
    </ul>
  </div>
);
export default Header;
