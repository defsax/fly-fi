import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import { fitBounds } from 'google-map-react';
import Marker from './Marker';
import '../../styles/css/map.css';
import { markerLoc, boundCoord } from '../../helpers/selector';

const config = {
  size: {
    width: 640, // Map width in pixels
    height: 380, // Map height in pixels
  },
};
// MODES
// const ALL = "ALL";
// const RESULT = "RESULT";

export default function Map(props) {
  const [lat, setLat] = useState(45.424721);
  const [lng, setLng] = useState(-75.695);
  const [coord, setCoord] = useState([{ lat: 45.424721, lng: -75.695 }]);
  //const [multiple, setMultiple] = useState(false);
  const [bounds, setBounds] = useState({
    nw: {
      lat: 45.424721,
      lng: -75.695,
    },
    se: {
      lat: 44.42833,
      lng: -73.6217,
    },
  });

  // const { mode, transition, back } = useVisualMode(SEARCH);

  // const { mode, transition, back } = useVisualMode(SEARCH);

  const { mapResults } = props;

  let { center, zoom } = fitBounds(bounds, config.size);
  if (mapResults.length === 1) {
    let coord = markerLoc(mapResults);
    center = { lat: coord[0].lat, lng: coord[0].lng };
    zoom = 7;
  }

  useEffect(() => {
    let calculatedCoord = markerLoc(mapResults);
    //console.log(calculatedCoord)
    setCoord(calculatedCoord);
    if (calculatedCoord) {
      setLat(calculatedCoord[0].lat);
      setLng(calculatedCoord[0].lng);
    }
    let calculatedBoundCoord = boundCoord(mapResults);
    if (mapResults.length > 1 && calculatedBoundCoord) {
      setBounds(calculatedBoundCoord);
    }
  }, [props]);

  return (
    <div className='map-container'>
      <GoogleMapReact
        className='map'
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API }}
        defaultZoom={4}
        defaultCenter={{
          lat,
          lng,
        }}
        center={center}
        zoom={zoom}
      >
        {/* {marker(results) && marker(results)} */}
        {coord &&
          coord.map((flight, index) => {
            return <Marker key={index} lat={flight.lat} lng={flight.lng} />;
          })}
      </GoogleMapReact>
    </div>
  );
}
