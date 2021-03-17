import { useState } from "react";

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


  return {flightInfo, setFlightInfo, notification, setNotification, setResults, results, reset }
}