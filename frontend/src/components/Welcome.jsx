import React from "react";
import { Link } from "react-router-dom";
import welcome from "../styles/scss/welcome.scss"

import Button from "./Button";

export default function Welcome(props) {  
  return(
    <div className="center">
      <h1>I am welcome component</h1>
      <Link to='/home'>
        <Button text="Home" disabled={false} />
      </Link>
    </div>
  )
}