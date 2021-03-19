import React, { useState } from 'react';
import '../../styles/scss/marker.scss';
import { markerLoc, boundCoord } from '../../helpers/selector';

export default function Marker(props) {
  const { flightNo, arr, dep, direction } = props;

  const [view, setView] = useState('');

  const renderMarkerDirection = (direction) => {
    const flightDirection = direction - 90;
    return { transform: 'rotate(' + flightDirection + 'deg)' };
  };

  return (
    <div>
      <i
        id='marker'
        className='fas fa-plane'
        style={renderMarkerDirection(direction)}
        onClick={() => {
          view === 'block' ? setView('none') : setView('block');
        }}
        // <p style={{ display: error.display }}>{error.message}</p>
      ></i>
      <div className='info-box' style={{ display: view }}>
        <p>
          {flightNo}
          <br />
          Dep:{dep}
          <br />
          Arr:{arr}
          <br />
          {direction}
        </p>
      </div>
    </div>
  );
}
