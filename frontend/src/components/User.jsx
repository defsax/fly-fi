import React from "react";

export default function User(props) {
  console.log("props", props);
  return(
    <div>
      <p>name = {props.name}</p>
      <p>email = {props.email}</p>
      <p>phone = {props.phone}</p>
      <br />
    </div>
  )
}