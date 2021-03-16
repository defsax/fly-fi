import React, { useState, useEffect } from "react";
import Button from "../../Button";

import ResultItem from "./ResultItem";
import "../../../styles/scss/results.scss";

export default function Results(props) {

  const { flightList, setFlightList } = props;

  // useEffect((choice) => {
  //   setFlightList(flightList);
  // });

  const panelList = function(array) {
    // console.log("choice: ", choice);
    console.log("panelList: ", array);

    return array.map((resultItem, index) => {
      return <ResultItem
        key={index}
        flight={resultItem}
        numberOfResults={array.length}
        setFlightList={() => setFlightList([resultItem])}
      />
    });
  }
  
  const header = function(array) {
    const number = array.length;
    const string = number > 1 ? `are ${number} flights` : number === 1 && array[0].flight ? `is only one flight` : `is no flight`;
    return (
      <section className="resultHeader" >
          <h3>{`There ${string} for that criteria`}</h3>
      </section>
    )
  }
  
  return (
    <div className='result-box'>
      <h1 className='result-header'>Flight Information</h1>
      <section className='result-header'>
        {header(flightList)}
      </section>
      <section>
        {panelList(flightList)}
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