import React from "react";

export default function ResultItem(props) {

  const {flight, numberOfResults} = props;

  function formatResults(resultArr) {
    let resultObj = resultArr;
    return(
      <div className="result-single">
        <h5>{resultObj.flight && "Flight#"}</h5>
        <p>{resultObj.flight && resultObj.flight['iataNumber']}</p>
        <h5>{resultObj.departure && "Departure"}</h5>
        <p>{resultObj.departure && resultObj.departure['iataCode']}</p>
        <h5>{resultObj.arrival && "Arrival"}</h5>
        <p>{resultObj.arrival && resultObj.arrival['iataCode']}</p>
        <h5>{resultObj.geography && "Altitude"}</h5>
        <p>{resultObj.geography && resultObj.geography['altitude']}</p>
        <h5>{resultObj.speed && "Speed"}</h5>
        <p>{resultObj.speed && resultObj.speed['horizontal']}</p>
        <h5>{resultObj.status && "Status"}</h5>
        <p>{resultObj.status && resultObj.status}</p>
      </div>
    )
  }
  
  function multipleFlights(resultArr) {    
    return (
      <p className="result-multiple">{resultArr.flight['iataNumber']}</p>
    )
  }
   
  function checkItem(result) {
    return numberOfResults > 1 ? multipleFlights(result) : formatResults(result);
  }


  return(
    <h1 onClick={props.onclick}>
      {checkItem(flight)}
    </h1>
  )
};