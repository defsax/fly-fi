import React from "react";
// import "../../../styles/scss/loading.scss";


const renderContrails = () => {
  const output =[]
  for (let i = 1; i <= 20; i++ ) {
    output.push(
      <span 
        key={i}
        style={{"--i":i}}
      ></span>
    )
  }
  return output; 
}

export default function Loading(props) {
  return(
    // lodader container
    <main className="container">

      <article className="loader-container">
        <div className="loader">
          <h1 className="text--semi-bold">{props.message}</h1>

            {renderContrails()}
        
          <i id="plane" className="fas fa-plane"></i>    

        </div>
      </article>
    </main>
  )
}