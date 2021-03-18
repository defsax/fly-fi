import React from "react";
import "../styles/scss/button.scss";

export default function Button({
  className = "",
  ...props
}) {

  return(
    <button
      type={props.type}
      disabled = {props.disabled} 
      confirm = {props.confirm}
      onClick={props.onClick} 
      className={`button${className}`}
    >
      {props.text}
    </button>
  );
};