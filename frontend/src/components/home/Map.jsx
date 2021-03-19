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
    width: 750, // Map width in pixels
    height: 750, // Map height in pixels
  },
  zoomLevel: {
    20: 2, //1128.49722 / 100,
    19: 5, //2256.99444 / 100,
    18: 7, //4513.98888 / 100,
    17: 10, //9027.977761 / 100,
    16: 15, //18055.95552 / 100,
    15: 20, //36111.91104 / 100,
    14: 25, //72223.82209 / 100,
    13: 50, //144447.6442 / 100,
    12: 70, //288895.2884 / 100,
    11: 100, //577790.5767 / 100,
    10: 120, //1155581.153 / 100,
    9: 200, //2311162.307 / 100,
    8: 250, //4622324.614 / 100,
    7: 270, //9244649.227 / 100,
    6: 750, //18489298.45 / 100,
    5: 1500, //36978596.91 / 100,
    4: 2500, //73957193.82 / 100,
    3: 5000, //147914387.6 / 100,
    2: 7000, //295828775.3 / 100,
    1: 10000, //591657550.5 / 100,
  },
};
//MODES
const DEFAULT = 'DEFAULT';
const RESULT = 'RESULT';

export default function Map(props) {
  const [lat, setLat] = useState(45.424721);
  const [lng, setLng] = useState(-75.695);
  const [coord, setCoord] = useState([{ lat: 45.424721, lng: -75.695 }]);
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

  const { results, defaultView } = props;

  let { center, zoom } = fitBounds(bounds, config.size);
  if (results.length === 1) {
    let coord = markerLoc(results);
    center = { lat: coord[0].lat, lng: coord[0].lng };
    zoom = 6;
  }
  let distance = config.zoomLevel[zoom];

  // const delayedSearch = function () {
  //   setTimeout(() => {
  //     submitAllSearch();
  //   }, 60000);
  // };

  const submitAllSearch = function () {
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
          let calculatedCoord = markerLoc(response.data);
          console.log(calculatedCoord);
          setCoord(calculatedCoord);
          if (calculatedCoord) {
            setLat(center.lat);
            setLng(center.lng);
          }
          let calculatedBoundCoord = boundCoord(response.data);
          if (calculatedBoundCoord) {
            setBounds(calculatedBoundCoord);
            //delayedSearch();
          }
        }
      });
  };

  useEffect(() => {
    submitAllSearch();
  }, [defaultView]);

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
          defaultZoom={6}
          defaultCenter={{
            lat,
            lng,
          }}
          center={center}
          zoom={zoom}
        >
          {coord &&
            coord.map((flight, index) => {
              return (
                <Marker
                  key={index}
                  lat={flight.lat}
                  lng={flight.lng}
                  direction={flight.direction}
                  flightNo={flight.flightNo}
                  arr={flight.arr}
                  dep={flight.dep}
                />
              );
            })}
          {/* {showData &&
            coord.map((flight, index) => {
              return (
                <a
                  className='pop-up-window'
                  lat={flight.lat - 0.01}
                  lng={flight.lng - 0.01}
                >
                  <h5>{flight.flightNo && 'Flight#:'}</h5>
                  <p>{flight.flightNo && flight.flightNo}</p>
                  <h5>{flight.dep && 'Departure:'}</h5>
                  <p>{flight.dep && flight.dep}</p>
                  <h5>{flight.arr && 'Arrival:'}</h5>
                  <p>{flight.arr && flight.arr}</p>
                </a>
              );
            })} */}
        </GoogleMapReact>
      )}

      {mode === DEFAULT && (
        <GoogleMapReact
          className='map'
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API }}
          defaultZoom={6}
          // defaultCenter={{
          //   lat,
          //   lng,
          // }}
          center={center}
          zoom={zoom}
        >
          {/* {marker(results) && marker(results)} */}
          {coord &&
            coord.map((flight, index) => {
              return (
                <Marker
                  key={index}
                  lat={flight.lat}
                  lng={flight.lng}
                  direction={flight.direction}
                  flightNo={flight.flightNo}
                  arr={flight.arr}
                  dep={flight.dep}
                />
              );
            })}
        </GoogleMapReact>
      )}
    </div>
  );
}
