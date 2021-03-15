import React from "react";

export default function ResultItem(props) {

  const {flight, numberOfResults} = props;

  function formatResults(resultArr) {
    let resultObj = resultArr;

    return(
      <div>
        <h2>{"Flight#"}</h2>
        <p>{resultObj.flight && resultObj.flight['iataNumber']}</p>
        <h2>{"Departure"}</h2>
        <p>{resultObj.departure && resultObj.departure['iataCode']}</p>
        <h2>{"Arrival"}</h2>
        <p>{resultObj.arrival && resultObj.arrival['iataCode']}</p>
        <h2>{"Altitude"}</h2>
        <p>{resultObj.geography && resultObj.geography['altitude']}</p>
        <h2>{"Speed"}</h2>
        <p>{resultObj.speed && resultObj.speed['horizontal']}</p>
        <h2>{"Status"}</h2>
        <p>{resultObj.status && resultObj.status}</p>
      </div>
    )
  }
  
  function multipleFlights(resultArr) {    
    return (
      <p>{resultArr.flight['iataNumber']}</p>
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