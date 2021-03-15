import React, { useState } from "react";
import Button from "../../Button";
import {formatResults, multipleFlights} from "../../../helpers/selector"
import useAPIData from "../../../hooks/useAPIData"

export default function Results(props) {
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
    "altitude": 0,
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
    }]);
  //const { label, value } = props;
  // const {
  //   results,
  //   setResults
  // } = useAPIData();
  // console.log("results", results)
  

  const selectedPanel = function(obj) {
    let resultInfo = formatResults(obj);
    let list =[];
    for (let key in resultInfo) {
      list.push(
      <section className="resultPanel" >
          <h3 className="resultPanel-header">{key}</h3>
          <h2 className="resultPanel-value">{resultInfo[key]}</h2>
      </section>
      )
    }
    return list;
  }

  const panelList = function(array) {
    if(array.length === 1){
      return selectedPanel(array[0]);
    } else if (array.length > 1) {
      let resultInfo = multipleFlights(array);
      let list = [];
      for(let i=0; i < resultInfo.length; i++) {
        list.push(
          <h1 onClick={selectedPanel(array[i])}>
            {resultInfo[i]}
          </h1>
        )
      }
      return list;
    }
  }
  
  const header = function(array) {
    const number = array.length;
    const string = number > 1 ? `are ${number} flights` : number === 1 ? `is only one flight` : `is no flight`;
    return (
      <section className="resultHeader" >
          <h3>{`There ${string} for that criteria`}</h3>
      </section>
    )
  }


  
  return (
    <div>
      <h1>Flight Information</h1>
      <section>
        {header(results)}
      </section>
      <section>
        {panelList(results)}
      </section>
      <section className="button-submit">
        <Button
          type="button"
          text="Show Plane"
          disabled={false}
        />
        </section>
    </div>
  )     
}