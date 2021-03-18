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
    lat: 44.614721,
    lng: -117.945000
    },
    se: {
      lat: 33.428335045970396,
      lng: -117.6217273125
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
  const {center, zoom} = fitBounds(bounds, config.size);

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
  const boundCoord = function(resultArr) {
    let result = {};
    if (resultArr.length > 0) {
      // find nw marker coord in the objects of markerloc funstion arr
      // to go furthest north max lat
      // to go furthest west  min lng
      resultArr = markerLoc(resultArr)
      let tempLat = [];
      let tempLng = [];
      let tempNWObj = {};
      let tempSEObj = {};
      for (let point of resultArr) {
        tempLat.push(point.lat);
        tempLng.push(point.lng)
      }
      //console.log('tempLat', tempLat)
      //console.log('tempLng', tempLng)

      tempNWObj['lat'] = tempLat.reduce(function(a, b) {
        return Math.max(a, b);
      });
      //console.log('maxlat', tempObj['lat'])
    
      tempNWObj['lng'] = tempLng.reduce(function(a, b) {
        return Math.min(a, b);
      });

      result['nw'] =  tempNWObj;
      //find se marker
      // to go furthest south min lat
      // to go furthest west  min lng
      tempSEObj['lat'] = tempLat.reduce(function(a, b) {
        return Math.min(a, b);
      });
      tempSEObj['lng'] = tempLng.reduce(function(a, b) {
        return Math.max(a, b);
      });
      result['se'] =  tempSEObj;
      return result;
    } else {
      return null;
    }
  }

  useEffect(() => { 
    let calculatedCoord = markerLoc(mapResults);
    console.log(calculatedCoord)
    setCoord(calculatedCoord);
    if(calculatedCoord){
      setLat(calculatedCoord[0].lat)
      setLng(calculatedCoord[0].lng) 
    } 
    let calculatedBoundCoord = boundCoord(mapResults);
    if(calculatedBoundCoord){
      console.log("inside useffect", calculatedBoundCoord);
      setBounds(calculatedBoundCoord)
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

