import React from "react";
import Error from "./Error"
import Loading from "./Loading"
import Login from "./Login"
import Register from "./Register"
import Results from "./Results"
import Search from "./Search"
import useAPIData from "../../../hooks/useAPIData"
import useVisualMode from '../../../hooks/useVisualMode'
import axios from "axios"
import sidebar from "../../../styles/scss/sidebar.scss";


const ERROR = 'ERROR';
const LOADING = "LOADING"
const SEARCH = "SEARCH"
const SHOW = "SHOW"


export default function SidePanel(props) {

  const {
    flightInfo, 
    setFlightInfo, 
    notification, 
    setNotification,
    results,
    setResults
  } = useAPIData();

  const {mode, transition, back } = useVisualMode(
    props.flightInfo ?  SHOW : SEARCH
  )

  const submitSearchForm = function () {
    transition(LOADING)
    axios.post('/search', {flight: {flight_number: flightInfo.flightNumber, dep_airport: flightInfo.departureAirport, arr_airport: flightInfo.arrivalAirport}})
    .then(response => {
      transition(SHOW, true)
      if(response.data.error) {
        console.log(response.data.error)
      }
      else {
        console.log('response', response.data);
        setResults([...response.data]);
        // reset();
      }
    })
  }
  
  return(
    <div>
      <article className='sidebar'>

      <h1>This is sidePanel</h1>


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
      <div className="side-bar">
      
        <Login handleLogin={props.login}/>
        <Register handleLogin={props.login}/>
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
      />
      )}
      </article>
    </div>
  )
}