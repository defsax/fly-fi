import { useState } from "react";

export default function useAPIData() {

  const [results, setResults] = useState([
    {
      "aircraft": {
      "iataCode": "B763",
      "icao24": "A3B1A0",
      "icaoCode": "B763",
      "regNumber": "N337UP"
      },
      "airline": {
      "iataCode": "5X",
      "icaoCode": "UPS"
      },
      "arrival": {
      "iataCode": "EMA",
      "icaoCode": "EGNX"
      },
      "departure": {
      "iataCode": "PHL",
      "icaoCode": "KPHL"
      },
      "flight": {
      "iataNumber": "5X237",
      "icaoNumber": "UPS237",
      "number": "237"
      },
      "geography": {
      "altitude": 30000,
      "direction": 106.88,
      "latitude": 52.83,
      "longitude": -1.23
      },
      "speed": {
      "horizontal": 12.024,
      "isGround": 0,
      "vspeed": 0
      },
      "status": "en-route",
      "system": {
      "squawk": null,
      "updated": 1615580757
      }
    }, 
    {
      "aircraft": {
      "iataCode": "B763",
      "icao24": "A3B1A0",
      "icaoCode": "B763",
      "regNumber": "N337UP"
      },
      "airline": {
      "iataCode": "5X",
      "icaoCode": "UPS"
      },
      "arrival": {
      "iataCode": "EMA",
      "icaoCode": "EGNX"
      },
      "departure": {
      "iataCode": "PHL",
      "icaoCode": "KPHL"
      },
      "flight": {
      "iataNumber": "5X666",
      "icaoNumber": "UPS237",
      "number": "237"
      },
      "geography": {
      "altitude": 30000,
      "direction": 106.88,
      "latitude": 52.83,
      "longitude": -1.23
      },
      "speed": {
      "horizontal": 12.024,
      "isGround": 0,
      "vspeed": 0
      },
      "status": "en-route",
      "system": {
      "squawk": null,
      "updated": 1615580757
      }
    }
  ]);

  const [flightInfo, setFlightInfo] = useState({
    flightNumber: "",
    departureAirport: "",
    arrivalAirport: ""
  });
  const [notification, setNotification] = useState(false);

 


  return {flightInfo, setFlightInfo, notification, setNotification, setResults, results }
}