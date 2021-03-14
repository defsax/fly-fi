import React, { useState } from "react";

export default function Results(props) {
  //const { label, value } = props;

  
  const panel = function(label, value) {
    return (
      <section className="resultPanel" >
          <h3 className="resultPanel-header">{label}</h3>
          <p className="resultPanel-value">{value}</p>
      </section>
    )
  }
  const header = function() {

  }


  
    return (
      <h1>This is Results</h1>

    )     
  }