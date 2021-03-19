import React from 'react';
import '../../styles/scss/marker.scss';

const renderMarkerDIrection = (props) => {
  const flightDirection = props - 90;
  return { transform: 'rotate(' + flightDirection + 'deg)' };
};

export default function Marker(props) {
  return (
    <i
      id='marker'
      className='fas fa-plane'
      style={renderMarkerDIrection(props.direction)}
    ></i>
  );
}
