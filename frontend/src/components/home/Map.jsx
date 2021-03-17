import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from "./Marker";
import "../../styles/scss/map.scss";


const config = {
  zoomLevel: 9,
  lat: 45.424721,
  lng: -75.695000,
  markerLongitude: 45.424721,
  markerLatitude: -75.695000
}

export default function Map(props) {
  const [zoomLevel, setZoomLevel] = useState(config.zoomLevel || 9);
  const [lat, setLat] = useState(config.lat || 45.424721);
  const [lng, setLng] = useState(config.lng || -75.695000);

  const { results } = props;

  const markerLoc = function(resultArr) {
    let result = [];
    if (resultArr.length > 0) {
      for (let obj of resultArr) {
        let coord = {};
        if(obj.geography) {
          coord['lat'] = obj.geography.latitude;
          coord['lng'] = obj.geography.longitude;
        }
      result.push(coord);
      }
      return result;
    } else {
      return null;
    }
  }

  const marker = function(array) {
    if (markerLoc(array)){
      let resultArr = markerLoc(array)
      resultArr.map((singleFlight, index) => {
        return (
          <Marker 
            key={index}
            lat={singleFlight.lat}
            lng={singleFlight.lng}
          />
        )
      })
    } else {
      return null;
    }
  }

  // useEffect(() => { 
  //   results[0] && setLat(results[0].geography.latitude)
  //   results[0] && setLng(results[0].geography.longitude)  
  // }, [results]);


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
      {marker(results) && marker(results)}
      </GoogleMapReact>
    </div>
  );
};

