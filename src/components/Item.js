import React from "react";
import Button from "./Button";

import "./Item.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Footer from "./Footer";

function Item({
  title,
  desc,
  backgroundImg,
  leftBtnTxt,
  leftBtnLink,
  rightBtnTxt,
  rightBtnLink,
  twoButtons,
  first,
  last,
  special,
}) {
  return (
    <div
      className="item"
      style={{
        backgroundImage: `url(${backgroundImg})`,
      }}
    >
      <div className="item__container">
        <div className="item__text">
          <p>{title}</p>
          <div className="item__textDesc">
            <p>{desc}</p>
          </div>
        </div>
        <div className="item__lowerThird">
          <div className="item__buttons">
            {special ? (
              <Button imp="primary" text={leftBtnTxt} link={leftBtnLink} />
            ) : (
              ""
            )}
            {last ? (
              <Button imp="special" text={leftBtnTxt} link={leftBtnLink} />
            ) : (
              ""
            )}
            {twoButtons && (
              <Button imp="secondary" text={rightBtnTxt} link={rightBtnLink} />
            )}
          </div>
          {first && (
            <div className="item__expand">
              <ExpandMoreIcon fontSize="Large" />
            </div>
          )}
          {last && <Footer />}
        </div>
      </div>
    </div>
  );
}

export default Item;
