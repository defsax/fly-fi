import React from "react";
import "./Button.scss";

export default function Button(props) {
  return(
    <button 
      disabled = {props.disabled} 
      confirm = {props.confirm}
      onClick={props.onClick} 
      className="button"
    >
      {props.text}
    </button>
  );
};