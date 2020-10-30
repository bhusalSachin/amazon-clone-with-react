import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import "./Header.css";
import { useStatevalue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStatevalue();

  const handleAuthentication = () => {
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="image">
        <Link to="/">
          <img
            className="header_png"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="hsdjahjsh"
          />
        </Link>
      </div>
      <div className="header_search">
        <input className="header_search_input" type="text" />
        <SearchIcon className="header_search_icon" />
      </div>

      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div className="header_option" onClick={handleAuthentication}>
            <span className="header_optionOne">
              {user ? user.email : "Hello Guest"}
            </span>
            <span className="header_optionTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header_optionOne">Returns</span>
          <span className="header_optionTwo">& Orders</span>
        </div>

        <div className="header_option">
          <span className="header_optionOne">Your</span>
          <span className="header_optionTwo">Prime</span>
        </div>
      </div>

      <Link to="/Checkout">
        <div className="header_basket">
          <span className="header_optionTwo basket_count">
            {basket?.length}
          </span>
          <ShoppingBasketIcon />
        </div>
      </Link>
    </div>
  );
}

export default Header;
