import React, { useState } from 'react';

const config = {
  markerLongitude: 45.424721,
  markerLatitude: -75.695000,
  googleMapsMarkerIcon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRINp6ut9j1blvcfrkgxQpYDXfnW_LhGhOXcg&usqp=CAU'
}

export default function Marker(props) {

  
  return (
    <img 
    className='marker' 
    src={config.googleMapsMarkerIcon}
    onClick={props.onClick} 
    />
    // <i className="fas fa-plane"></i>
  )
}