import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import { fitBounds } from 'google-map-react';
import Marker from "./Marker";
import "../../styles/css/map.css";


const config = {
  zoomLevel: 9,
  lat: 45.424721,
  lng: -75.695000,
  bounds: {nw: {
    lat: 45.424721,
    lng: -75.695000
    },
    se: {
      lat: 44.428335045970396,
      lng: -73.6217273125
    }
  },
  size:{
    width: 640, // Map width in pixels
    height: 380, // Map height in pixels
  }
}

export default function Map(props) {
  //const [zoomLevel, setZoomLevel] = useState(config.zoomLevel || 9);
  const [lat, setLat] = useState( 45.424721);
  const [lng, setLng] = useState( -75.695000);
  const [coord, setCoord] = useState([{lat:45.424721, lng:-75.695000}]);
  const [bounds, setBounds] = useState({nw: {
                                          lat: 45.424721,
                                          lng: -75.695000
                                          },
                                        se: {
                                            lat: 44.42833,
                                            lng: -73.6217
                                          }
                                        })

  const { mapResults } = props;
  const {center, zoom} = fitBounds(config.bounds, config.size);

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
    let calculatedCoord = markerLoc(mapResults);
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
        defaultZoom={9}
        defaultCenter={{
          lat,
          lng
          }}
        center={center}
        zoom={zoom}
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

