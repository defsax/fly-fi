import React from "react";

import "../../../styles/css/result-item.css"

export default function ResultItem(props) {

  const {flight, setFlightList, numberOfResults} = props;

  function formatResults(resultArr) {
    let resultObj = resultArr;
    return(
      <div className="single-result-item">
        <div className="item">
          <h5>{resultObj.flight && "Flight#:"}</h5>
          <p>{resultObj.flight && resultObj.flight['iataNumber']}</p>
        </div>
        
        <div className="item">
          <h5>{resultObj.departure && "Departure:"}</h5>
          <p>{resultObj.departure && resultObj.departure['iataCode']}</p>
        </div>
        
        <div className="item">
          <h5>{resultObj.arrival && "Arrival:"}</h5>
          <p>{resultObj.arrival && resultObj.arrival['iataCode']}</p>
        </div>
        
        <div className="item">
          <h5>{resultObj.geography && "Altitude:"}</h5>
          <p>{resultObj.geography && resultObj.geography['altitude']}ft</p>
        </div>
        
        <div className="item">
          <h5>{resultObj.speed && "Speed:"}</h5>
          <p>{resultObj.speed && resultObj.speed['horizontal']}km/h</p>
        </div>

        <div className="item">
          <h5>{resultObj.status && "Status:"}</h5>
          <p>{resultObj.status && resultObj.status}</p>
        </div>
      </div>
    )
  }
  
  function multipleFlights(resultArr) {    
    return (
      <div className="multiple-result-item">
        <p onClick={setFlightList}>
          {resultArr.flight['iataNumber']}
        </p>
      </div>
    )
  }
   
  function checkItem(result) {
    return numberOfResults > 1 ? multipleFlights(result) : formatResults(result);
  }


  return(
    <div className="results">
      {checkItem(flight)}
    </div>
  )
};