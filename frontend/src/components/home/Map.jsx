import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GoogleMapReact from 'google-map-react';
import { fitBounds } from 'google-map-react';
import Marker from './Marker';
import '../../styles/css/map.css';
import { markerLoc, boundCoord } from '../../helpers/selector';
import useVisualMode from '../../hooks/useVisualMode';

const config = {
  size: {
    width: 640, // Map width in pixels
    height: 380, // Map height in pixels
  },
};
//MODES
const DEFAULT = 'DEFAULT';
const RESULT = 'RESULT';

export default function Map(props) {
  const [mapResults, setMapResults] = useState([]);
  const [lat, setLat] = useState(45.424721);
  const [lng, setLng] = useState(-75.695);
  const [coord, setCoord] = useState([{ lat: 45.424721, lng: -75.695 }]);
  //const [distance, setDistance] = useState(100);
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

  const { mode, transition, back } = useVisualMode(DEFAULT);

  const { results } = props;

  let { center, zoom } = fitBounds(bounds, config.size);
  if (results.length === 1) {
    let coord = markerLoc(results);
    center = { lat: coord[0].lat, lng: coord[0].lng };
    zoom = 7;
  }
  let distance = 700;
  // console.log(center.lat);

  const submitAllSearch = function () {
    setMapResults([]);
    console.log('all search called.');
    return axios
      .post('/search', {
        flight: {
          flight_number: '',
          dep_airport: '',
          arr_airport: '',
          lat: center.lat,
          lng: center.lng,
          distance,
        },
      })
      .then((response) => {
        if (response.data.error) {
          console.log(response.data.error);
        } else {
          console.log('all search response:', response.data);
          transition(DEFAULT);
          setMapResults(response.data);
          let calculatedCoord = markerLoc(mapResults);
          console.log(calculatedCoord, mapResults);
          setCoord(calculatedCoord);
          if (calculatedCoord) {
            setLat(center.lat);
            setLng(center.lng);
          }
          let calculatedBoundCoord = boundCoord(mapResults);
          if (calculatedBoundCoord) {
            setBounds(calculatedBoundCoord);
          }
        }
      });
  };

  useEffect(() => {
    submitAllSearch();
  }, []);

  useEffect(() => {
    transition(RESULT);
    let calculatedCoord = markerLoc(results);
    //console.log(calculatedCoord)
    setCoord(calculatedCoord);
    if (calculatedCoord) {
      setLat(calculatedCoord[0].lat);
      setLng(calculatedCoord[0].lng);
    }
    let calculatedBoundCoord = boundCoord(results);
    if (results.length > 1 && calculatedBoundCoord) {
      setBounds(calculatedBoundCoord);
    }
  }, [results]);

  return (
    <div className='map-container'>
      {mode === RESULT && (
        <GoogleMapReact
          className='map'
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API }}
          defaultZoom={3}
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
      )}

      {mode === DEFAULT && (
        <GoogleMapReact
          className='map'
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API }}
          defaultZoom={6}
          defaultCenter={{
            lat,
            lng,
          }}
          center={center}
          zoom={6}
        >
          {/* {marker(results) && marker(results)} */}
          {coord &&
            coord.map((flight, index) => {
              return <Marker key={index} lat={flight.lat} lng={flight.lng} />;
            })}
        </GoogleMapReact>
      )}
    </div>
  );
}
