import React, { useState } from 'react';
import '../../styles/scss/marker.scss';

export default function Marker(props) {
  const { altitude, flightNo, arr, dep, direction, lat, lng } = props;

  const [view, setView] = useState('');

  const renderMarkerDirection = (direction) => {
    const flightDirection = direction - 90;
    return { transform: 'rotate(' + flightDirection + 'deg)' };
  };
  const image = "✈";

  // (function () {
  //   let marker = document.getElementById('marker'),
  //     top = lat,
  //     left = lng,
  //     angle = (direction * Math.PI) / 180,
  //     speed = 1,
  //     deltaX = Math.cos(angle) * speed,
  //     deltaY = Math.sin(angle) * speed;
  //   // setInterval(function () {
  //     props.positionHandler({
  //       lat: (top += deltaY),
  //       lng: (left += deltaX),
  //     });
  //   // }, 6000);
  // })();

  return (
    <div>
      <i
        id='marker'
        className='fas fa-plane'
        style={renderMarkerDirection(direction)}
        onClick={() => {
          view === 'block' ? setView('none') : setView('block');
        }}
      ></i>
      <div className='info-box' style={{ display: view }}>
        <p className='info-flight-number'>
          {flightNo}
          <br />
          {dep}{image}{arr}
          <br />
          Alt:{Math.round(altitude * 3.28)} / {direction}
        </p>
      </div>
    </div>
  );
}
