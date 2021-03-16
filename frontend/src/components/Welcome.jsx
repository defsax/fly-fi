import React from "react";
import { Link } from "react-router-dom";
import VideoLooper from "react-video-looper";

import Button from "./Button";  

export default function Welcome(props) {  
  return(
    <div>
      <h1>I am welcome component</h1>
      <Link to='/home'>
        <Button text="Home" disabled={false} />
      </Link>
      <VideoLooper source='https://lewhunt.github.io/assets/fitness/squats-720p.mp4' start={0} end={10.0} />
    </div>
  )
}