import React from "react";
import { Link } from "react-router-dom";

import Button from "./Button";

export default function Welcome(props) {  
  return(
    <div>
      <h1>I am welcome component</h1>
      <Link to='/home'>
        <Button text="Home" disabled={false} />
      </Link>
    </div>
  )
}