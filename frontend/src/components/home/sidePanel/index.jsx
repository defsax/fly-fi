import React from "react";

// COMPONENTS
import Error from "./Error";
import Loading from "./Loading";
import Results from "./Results";
import Search from "./Search";

// HOOKS
import useAPIData from "../../../hooks/useAPIData";
import useVisualMode from '../../../hooks/useVisualMode';

// STYLESHEETS
import "../../../styles/css/sidebar.css";

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
    setResults,
    submitSearch,
    reset
  } = props


  //for when we want to show login from sidepanel
  // const {mode, transition, back } = props.visualModeHook;

  const {mode, transition, back } = useVisualMode(
    SEARCH
  )

  const submitSearchForm = function () {
    transition(LOADING)
    submitSearch()
    .then(() => {
      transition(SHOW, true)
      reset()
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
    <div className="side-bar">

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
    </div>
  )
}