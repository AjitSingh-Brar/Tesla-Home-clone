import React from "react";
import "./Header.css";
import TeslaLogo from "../assets/teslaLogoSmall.svg";
import ReorderIcon from "@material-ui/icons/Reorder";
function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={TeslaLogo} alt="tesla logo" />
      </div>

      <div className="header__center">
        <p>Model S</p>
        <p>Model 3</p>
        <p>Model X</p>
        <p>Model Y</p>
        <p>Solar Roof</p>
        <p>Solar Panels</p>
      </div>
      <div className="header__right">
        <p>Shop</p>
        <p>Tesla Account</p>
        <div className="header__icon"><ReorderIcon /></div>
        
      </div>
    </div>
  );
}

export default Header;
