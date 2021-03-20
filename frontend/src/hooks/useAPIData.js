import { useState } from 'react';

export default function useAPIData() {
  const [results, setResults] = useState([]);
  const [flightNumber, setFlightNumber] = useState('');
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');
  const [defaultView, setDefaultView] = useState(0);
  const [notification, setNotification] = useState(false);

  const [flightInfo, setFlightInfo] = useState({
    flightNumber: "",
    departureAirport: "",
    arrivalAirport: "",
  });

  const reset = function () {
    setFlightNumber('');
    setDeparture('');
    setArrival('');
    setNotification(false);
  };

  return {
    notification,
    setNotification,
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
    flightInfo, 
    setFlightInfo
  };
}
