import React, { useState } from 'react';
import "../../styles/scss/marker.scss";

const config = {
  markerLongitude: 45.424721,
  markerLatitude: -75.695000,
  googleMapsMarkerIcon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
}

export default function Marker(props) {

  
  return (
    <i id="marker" className="fas fa-plane"></i>   
  )
}