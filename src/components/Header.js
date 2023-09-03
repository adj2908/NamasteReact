import { LOGO_URL } from "../utils/constants";

const Header = () => (
  <div className="header">
    <img className="app-logo" src={LOGO_URL} />
    <ul className="header-list">
      <li>Menu</li>
      <li>Contact us</li>
      <li>Cart</li>
    </ul>
  </div>
);
export default Header;
