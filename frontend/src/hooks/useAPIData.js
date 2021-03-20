import { useState } from 'react';

export default function useAPIData() {
  const [results, setResults] = useState([]);
  const [flightNumber, setFlightNumber] = useState('');
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');
  const [defaultView, setDefaultView] = useState(0);

  // const [flightInfo, setFlightInfo] = useState({
  //   flightNumber: "",
  //   departureAirport: "",
  //   arrivalAirport: "",
  //   notification: false
  // });

  const reset = function () {
    setFlightNumber('');
    setDeparture('');
    setArrival('');
  };

  return {
    arrival,
    setArrival,
    departure,
    setDeparture,
    flightNumber,
    setFlightNumber,
    setResults,
    results,
    reset,
    defaultView,
    setDefaultView,
  };
}
