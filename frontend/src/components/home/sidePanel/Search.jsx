import React from "react";
import Form from "react-bootstrap/Form";
import Button from "../../Button";
import "./Login.scss";
import useAPIData from "../../../hooks/useAPIData"

export default function Search(props) {
  const {
    flightInfo, 
    setFlightInfo, 
    submitSearchForm, 
    notification, 
    setNotification
  } = useAPIData();

  

  function handleSubmit(event) {
    event.preventDefault();
    //1: search by flight number
    //2: search by dep or arr
    //console.log(flightInfo.flightNumber);
    
    submitSearchForm();
  }

  function validateForm() {  
    //console.log("flightInfo", flightInfo);
    //console.log("notification", notification);
    return flightInfo.flightNumber ? 
    true : 
    flightInfo.departureAirport && flightInfo.arrivalAirport ? 
    true : false
  }
  

  return (
    <div className="Login">
    <form autoComplete="off" onSubmit={handleSubmit} >
        <section className="FormLabel">
          <Form.Label>Flight Number</Form.Label>
        </section>
        <section className="InputLabel">
          <input
            name="flightNumber"
            type="text"
            placeholder= "Iata Code"
            value={flightInfo.flightNumber}
            onChange={e => setFlightInfo({...flightInfo, flightNumber: e.target.value})}
          /> 
        </section>
        <section className="FormLabel">
          <Form.Label>Departure Airport</Form.Label>
        </section>
        <section className="InputLabel">
          <input
            name="departureAirport"
            type="text"
            placeholder= "Airport Code"
            value={flightInfo.departureAirport}
            onChange={e => setFlightInfo({...flightInfo, departureAirport: e.target.value})}
          />
        </section>
        <section className="FormLabel">
          <Form.Label>Arrival Airport</Form.Label>
        </section>
        <section className="InputLabel">
          <input
            name="arrivalAirport"
            type="text"
            placeholder= "Airport Code"
            value={flightInfo.arrivalAirport}
            onChange={e => setFlightInfo({...flightInfo, arrivalAirport: e.target.value})}
          />
        </section>
        {/* notification logic need to be worked on */}
        <section className="InputLabel">
        <input
            name="notification"
            type="checkbox"
            value={notification}
            onChange={e => setNotification(e.target.value)}
          />
          <Form.Label>Do you need SMS notification??</Form.Label>
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