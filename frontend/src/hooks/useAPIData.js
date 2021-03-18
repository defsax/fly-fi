import { useState } from "react";

export default function useAPIData() {

  
  const [results, setResults] = useState([]);
  const [mapResults, setMapResults] = useState([]);
  const[flightNumber, setFlightNumber] = useState("") 
  const[departure, setDeparture] = useState("") 
  const[arrival, setArrival] = useState("") 
  const [notification, setNotification] = useState(false);

  // const [flightInfo, setFlightInfo] = useState({
  //   flightNumber: "",
  //   departureAirport: "",
  //   arrivalAirport: "",
  //   notification: false
  // });

  const reset = function () {
    setFlightNumber("");
    setDeparture("");
    setArrival("");
    setNotification(false);
  }


  return {notification, setNotification, arrival, setArrival, departure, setDeparture, flightNumber, setFlightNumber, setResults, results, reset, mapResults, setMapResults }
}