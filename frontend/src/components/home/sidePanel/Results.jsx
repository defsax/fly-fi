import React, { useState } from "react";
import Button from "../../Button";
import {formatResults} from "../../../helpers/selector"

export default function Results(props) {
  //const { label, value } = props;
  const [results, setResults] = useState([{}])
  
  const panel = function(label, value) {
    return (
      <section className="resultPanel" >
          <h3 className="resultPanel-header">{label}</h3>
          <p className="resultPanel-value">{value}</p>
      </section>
    )
  }

  const panelList = function(array) {
    if(results.length === 1){
      let resultInfo = formatResults(results[0]);
      for (let key in resultInfo) {
        panel(key, resultInfo[key])
      }
    } else if (results.length > 1) {
      
    } else {

    }
  }

  const header = function() {
    const number = results.length;
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
        {header()}
        {panelList()}
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