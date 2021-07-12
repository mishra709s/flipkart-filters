import React from "react";
import "./Header.css";

import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="http://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/fk-logo_9fddff.png"
      />
      <div className="header_search">
        <input
          className="header_searchInput"
          type="text"
          placeholder="Search for products, brands and more"
        />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_Login">
        <button className="login_btn">Login</button>
      </div>
      <div className="header_more">
        <div>More</div>
        <KeyboardArrowDownIcon />
      </div>
      <div className="header_cart">
        <ShoppingCartIcon />
        <div>Cart</div>
      </div>
    </div>
  );
}

export default Header;
