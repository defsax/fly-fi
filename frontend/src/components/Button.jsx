import React from "react";
import button from "../styles/scss/button.scss";

export default function Button({
  className = "",
  ...props
}) {

  return(
    <button 
      disabled = {props.disabled} 
      confirm = {props.confirm}
      onClick={props.onClick} 
      className={`button${className}`}
    >
      {props.text}
    </button>
  );
};