import React from "react";
import Error from "./Error"
import Loading from "./Loading"
import Login from "./Login"
import Register from "./Register"
import Results from "./Results"
import Search from "./Search"
import useAPIData from "../../../hooks/useAPIData"

import sidebar from "../../../styles/scss/sidebar.scss";

export default function SidePanel(props) {

  const {
    flightInfo, 
    setFlightInfo, 
    notification, 
    setNotification,
    results,
    setResults
  } = useAPIData();


  
  return(
    <div className="side-bar">
      <Error />
      <Loading />
      <Login handleLogin={props.login}/>
      <Register />
      <Search 
        setResults={setResults} 
        flightInfo={flightInfo}
        setFlightInfo={setFlightInfo}
        notification={notification}
        setNotification={setNotification}
        />
      <Results flightList={results} />
    </div>
  )
}