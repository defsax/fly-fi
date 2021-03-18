import React from "react";
import "react-bootstrap/Form";
import Button from "../../Button";
import "../../../styles/css/form.css";
import "../../../styles/css/search.css";

export default function Search(props) {

  const { flightInfo, setFlightInfo, notification, setNotification } = props;

  // const submitSearchForm = function () {
  //   axios.post('/search', {flight: {flight_number: flightInfo.flightNumber, dep_airport: flightInfo.departureAirport, arr_airport: flightInfo.arrivalAirport}})
  //   .then(response => {
  //     if(response.data.error) {
  //       console.log(response.data.error)
  //     }
  //     else {
  //       console.log('response', response.data);
  //       setResults([...response.data]);
  //       reset();
  //     }
  //   })
  // const reset = function () {
  //   setFlightInfo({
  //     flightNumber: "",
  //     departureAirport: "",
  //     arrivalAirport: ""
  //   });
  // }

  function handleSubmit(event) {
    event.preventDefault();
    //1: search by flight number
    //2: search by dep or arr
    props.submitSearchForm();
  }

  function validateForm() {
    return flightInfo.flightNumber ? 
    true : 
    flightInfo.departureAirport && flightInfo.arrivalAirport ? 
    true : false
  }
  
  return (
    <div className="search-box">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <h1>Search</h1>

        <section>
          <label htmlFor="flightNumber">
            Flight Number
          </label>
          <input
            name="flightNumber"
            type="text"
            placeholder= "Iata Code"
            value={flightInfo.flightNumber}
            onChange={e => setFlightInfo({...flightInfo, flightNumber: e.target.value})}
          /> 
        </section>
        
        <section>
          <label htmlFor="departureAirport">
            Departure Airport
          </label>
          <input
            name="departureAirport"
            type="text"
            placeholder= "Airport Code"
            value={flightInfo.departureAirport}
            onChange={e => setFlightInfo({...flightInfo, departureAirport: e.target.value})}
          />
        </section>
        
        <section>
          <label htmlFor="arrivalAirport">
            Arrival Airport
          </label>
          <input
            name="arrivalAirport"
            type="text"
            placeholder= "Airport Code"
            value={flightInfo.arrivalAirport}
            onChange={e => setFlightInfo({...flightInfo, arrivalAirport: e.target.value})}
          />
        </section>
        {/* notification logic need to be worked on */}
        
        <section>
          <label htmlFor="arrivalAirport">SMS notification?</label>
          <input
            name="notification"
            type="checkbox"
            value={notification}
            onChange={e => setNotification(e.target.value)}
          />
        </section>
        
        <section className="button-submit">
          <Button
            block
            type="submit"
            variant="success"
            text="Let's Fly-fi"
            disabled={!validateForm()}
          />
          </section>
        </form>
      </div>
    );
}