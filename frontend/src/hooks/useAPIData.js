import { useState } from "react";
import axios from 'axios';

export default function useAPIData() {
  
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

  const submitSearchForm = function () {

  //useEffect( () => {  
    axios.post('/search', {flight: {flight_number: flightInfo.flightNumber, dep_airport: flightInfo.departureAirport, arr_airport: flightInfo.arrivalAirport}})
    .then(response => {
      if(response.data.error) {
        console.log(response.data.error)
      }
      else {
        console.log('response', response.data);
        //setResults([...response.data]);
        reset();
      }
    })
  }
  

  return {flightInfo, setFlightInfo,  submitSearchForm, notification, setNotification}

}