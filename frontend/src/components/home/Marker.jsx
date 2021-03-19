import React, { useState } from 'react';
import '../../styles/scss/marker.scss';

// import ResultItem from './ResultItem';

const config = {
  markerLongitude: 45.424721,
  markerLatitude: -75.695,
  googleMapsMarkerIcon:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRINp6ut9j1blvcfrkgxQpYDXfnW_LhGhOXcg&usqp=CAU',
};

export default function Marker(props) {
  let flightDirection = props.direction - 90;
  return (
    // <img
    // className='marker'
    // src={config.googleMapsMarkerIcon}
    // onClick={props.onClick}
    // />
    <i
      id='marker'
      className='fas fa-plane'
      style={{ transform: 'rotate(' + flightDirection + 'deg)' }}
      onClick={props.onClick}
    ></i>
  );
}
