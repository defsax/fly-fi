import React from "react";
import Error from "./Error"
import Loading from "./Loading"
import Login from "./Login"
import Register from "./Register"
import Results from "./Results"
import Search from "./Search"
import useVisualMode from '../../../hooks/useVisualMode'
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
    setResults,
    submitSearch,
    reset
  } = props

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
  
  return(
    <div>
      
      <Login handleLogin={props.login}/>
      <Register handleLogin={props.login}/>

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