import React from "react";
import "./Header.css";
import TeslaLogo from "../assets/teslaLogoSmall.svg";
import ReorderIcon from "@material-ui/icons/Reorder";
function Header() {
  return (
    <div className="header">
      <div className="header__logo">
      <a href="">  <img src={TeslaLogo} alt="tesla logo" /></a>
      </div>

      <div className="header__center">
       <p> <a href="">Model S</a></p>
        <p><a href="">Model 3</a></p>
        <p><a href="">Model X</a></p>
        <p><a href="">Model Y</a></p>
        <p><a href="">Solar Roof</a></p>
        <p><a href="">Solar Panels</a></p>
      </div>
      <div className="header__right">
        <p><a href="">Shop</a></p>
        <p><a href="">Tesla Account</a></p>
        <div className="header__icon"><ReorderIcon /></div>
        
      </div>
    </div>
  );
}

export default Header;
