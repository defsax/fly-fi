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
  const [lat, setLat] = useState( 45.424721);
  const [lng, setLng] = useState( -75.695000);
  const [coord, setCoord] = useState([{lat:45.424721, lng:-75.695000}]);

  const { results } = props;

  const markerLoc = function(resultArr) {
    let result = [];
    if (resultArr.length > 0) {
      
      for (let obj of resultArr[0]) {
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


  useEffect(() => { 
    //console.log(results[0].geography.latitude)
    let calculatedCoord = markerLoc(results);
    console.log(calculatedCoord)
    setCoord(calculatedCoord);
    if(calculatedCoord){
      setLat(calculatedCoord[0].lat)
      setLng(calculatedCoord[0].lng) 
    } 
  }, [props]);


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
        center={{
          lat,
          lng
          }}
      >
      {/* {marker(results) && marker(results)} */}
      {coord && coord.map((flight, index)=> {
        return (<Marker
        key = {index}
        lat={flight.lat}
        lng={flight.lng}
        />)
      })
      }
      
      </GoogleMapReact>
    </div>
  );
};

