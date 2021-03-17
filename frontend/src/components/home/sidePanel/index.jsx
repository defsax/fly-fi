import React from "react";
import axios from "axios";

// COMPONENTS
import Error from "./Error";
import Loading from "./Loading";
import Results from "./Results";
import Search from "./Search";

// HOOKS
import useAPIData from "../../../hooks/useAPIData";
import useVisualMode from '../../../hooks/useVisualMode';

// STYLESHEETS
import "../../../styles/scss/sidebar.scss";

// MODES
const ERROR = 'ERROR';
const LOADING = "LOADING";
const SEARCH = "SEARCH";
const SHOW = "SHOW";

export default function SidePanel(props) {

  const {
    flightInfo, 
    setFlightInfo, 
    notification, 
    setNotification,
    results,
    setResults
  } = useAPIData();


  //for when we want to show login from sidepanel
  // const {mode, transition, back } = props.visualModeHook;

  const {mode, transition, back } = useVisualMode(
    SEARCH
  )

  const submitSearchForm = function () {
    transition(LOADING)
    axios.post('/search', {flight: {flight_number: flightInfo.flightNumber, dep_airport: flightInfo.departureAirport, arr_airport: flightInfo.arrivalAirport}})
    .then(response => {
      transition(SHOW, true)
      console.log(response);
      if(response.data.error) {
        console.log(response.data.error)
      }
      else {
        console.log('response', response.data);
        setResults([...response.data]);
      }
    })
  }
  
const searchAgain = () => {
  transition(SEARCH)
  setFlightInfo({
    flightNumber: "",
    departureAirport: "",
    arrivalAirport: ""
  });
}

  return(
    <div>
      <article className="side-bar">

      {mode === ERROR && (
        <Error 
          message="There was an Error"
          onClose={back}
        />
      )}
      {mode === LOADING &&
        <Loading message="Loading" />
      }

      {mode === SEARCH && (
      <div>
        <Search 
          submitSearchForm={submitSearchForm}
          // setResults={setResults} 
          flightInfo={flightInfo}
          setFlightInfo={setFlightInfo}
          notification={notification}
          setNotification={setNotification}
          />
        </div>
      )}

      {mode === SHOW && (
      <Results 
        flightList={results}
        setFlightList={setResults}
        searchAgain={searchAgain}
        
      />
      )}
      </article>
    </div>
  )
}