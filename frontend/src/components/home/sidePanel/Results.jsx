import React, { useState } from "react";
import Button from "../../Button";

import ResultItem from "./ResultItem";

import {formatResults, multipleFlights} from "../../../helpers/selector"
import useAPIData from "../../../hooks/useAPIData"

export default function Results(props) {

  const { flightList } = props;
  
  //const { label, value } = props;
  // const {
  //   results,
  //   setResults
  // } = useAPIData();
  // console.log("results", results)
  

  // const selectedPanel = function(obj) {
  //   let resultInfo = formatResults(obj);
  //   let list =[];
  //   for (let key in resultInfo) {
  //     list.push(
  //     <section className="resultPanel" >
  //         <h3 className="resultPanel-header">{key}</h3>
  //         <h2 className="resultPanel-value">{resultInfo[key]}</h2>
  //     </section>
  //     )
  //   }
  //   return list;
  // }

  const panelList = function(array) {
    return array.map((resultItem, index) => {
      return <ResultItem
        key={index}
        flight={resultItem}
        numberOfResults={array.length}
      />
    });

    // if(array.length === 1){
    //   <ResultItem
    //     key={array[0]}
    //     onclick={selectedPanel(array[0])}
    //     flightNumber={resultInfo[i]}
    //   />
    //   return selectedPanel(array[0]);
    // } else if (array.length > 1) {
    //   let resultInfo = multipleFlights(array);
    //   let list = [];
    //   for(let i=0; i < resultInfo.length; i++) {
    //     list.push(
    //       <ResultItem 
    //         key={i}
    //         onclick={selectedPanel(array[i])}
    //         flightNumber={resultInfo[i]}
    //       />
    //     )
    //   }
    //   return list;
    // }
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