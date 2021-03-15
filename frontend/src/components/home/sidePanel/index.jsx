import React from "react";
import Error from "./Error"
import Loading from "./Loading"
import Login from "./Login"
import Register from "./Register"
import Results from "./Results"
import Search from "./Search"
import useAPIData from "../../../hooks/useAPIData"

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
    <div>
      <h1>This is sidePanel</h1>
      <Error />
      <Loading />
      <Login />
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