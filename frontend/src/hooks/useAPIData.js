import { useState, useEffect } from "react";
import axios from 'axios';

export default function useAPIData() {
  const [results, setResults] = useState([]);
  const [flightInfo, setFlightInfo] = useState({
    flightNumber: "",
    departureAirport: "",
    arrivalAirport: ""
  });
  const [notification, setNotification] = useState(false);

  const reset = function () {
    setFlightInfo({
      flightNumber: "",
      departureAirport: "",
      arrivalAirport: ""
    });
  }
  let result =[];
  const submitSearchForm = function () {
    axios.post('/search', {flight: {flight_number: flightInfo.flightNumber, dep_airport: flightInfo.departureAirport, arr_airport: flightInfo.arrivalAirport}})
    .then(response => {
      if(response.data.error) {
        console.log(response.data.error)
      }
      else {
        console.log('response', response.data);
        result = [...response.data];
        setResults(result);
        reset();
      }
    })
    .catch(error => {
      console.log(error)
      //do nothing or reload search form
    });
  }
  

  return {results, setResults, flightInfo, setFlightInfo, submitSearchForm, notification, setNotification}

}