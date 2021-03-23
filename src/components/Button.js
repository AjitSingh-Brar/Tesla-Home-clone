import React from "react";
import "./Button.css";
function Button({ imp, text, link }) {
  return (
    <div className={`button ${imp == "secondary" ? "button__white" : ""} ${imp =='special' ? 'button__special' :''}`}>
      <a href={link}>{text}</a>
    </div>
  );
}

export default Button;
