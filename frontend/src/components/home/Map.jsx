import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from "./Marker";
import "../../styles/scss/map.scss";

const config = {
  zoomLevel: 15,
  lat: 45.424721,
  lng: -75.695000,
  markerLongitude: 45.424721,
  markerLatitude: -75.695000
}

export default function Map(props) {
  const [zoomLevel, setZoomLevel] = useState(config.zoomLevel)
  const [lat, setLat] = useState(config.lat || 51.4934);
  const [lng, setLng] = useState(config.lng || 0.0098);

  return (
    <div className='map-container'>
      <GoogleMapReact
      className='map'
      bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_API}}
      defaultZoom={zoomLevel}
      defaultCenter={{
        lat,
        lng
        }}
      >
      <Marker 
        //text="i'm here"
        lat={config.latitudeForMarker}
        lng={config.longitudeForMarker}
       />
       </GoogleMapReact>
    </div>
  );
};

