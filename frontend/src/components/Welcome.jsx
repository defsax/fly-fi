import React from "react";
import { Link } from "react-router-dom";
import "../styles/css/welcome.css"

import Button from "./Button";  

export default function Welcome(props) {  
  return(
    <div>
      <Link to='/home'>
        <Button 
          text="Take Off" 
          disabled={false} 
          className="--welcome"
        />
      </Link>
      <div className="video-container">
        <video autoplay="autoplay" loop>
          <source src='https://github.com/defsax/fly-fi/blob/master/frontend/public/videos/flyfi.mp4?raw=true' type="video/mp4"/>
        </video>
      </div>
    </div>
  )
}