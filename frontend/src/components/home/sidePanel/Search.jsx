import React, { useState } from 'react';
import Button from '../../Button';
import '../../../styles/css/form.css';
import '../../../styles/css/search.css';

export default function Search(props) {
  const {
    arrival,
    setArrival,
    departure,
    setDeparture,
    flightNumber,
    setFlightNumber,
    notification,
    setNotification,
    setFlightInfo,
    flightInfo
  } = props;

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
    setFlightInfo({
      flightNumber: flightNumber,
      departureAirport: departure,
      arrivalAirport: arrival,
    })

    props.submitSearchForm();
  }

  function validateForm() {
    return flightNumber ? true : departure && arrival ? true : false;
  }

  return (
    <div className='search-box'>
      <form autoComplete='off' onSubmit={handleSubmit}>
        <h1>Search</h1>

        <section>
          <label htmlFor='flightNumber'>Flight Number</label>
          <input
            name='flightNumber'
            type='text'
            placeholder='Iata Code'
            value={flightNumber}
            onChange={(e) => setFlightNumber(e.target.value)}
          />
        </section>

        <section>
          <label htmlFor='departureAirport'>Departure Airport</label>
          <input
            name='departureAirport'
            type='text'
            placeholder='Airport Code'
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
          />
        </section>

        <section>
          <label htmlFor='arrivalAirport'>Arrival Airport</label>
          <input
            name='arrivalAirport'
            type='text'
            placeholder='Airport Code'
            value={arrival}
            onChange={(e) => setArrival(e.target.value)}
          />
        </section>
        {/* notification logic need to be worked on */}

        {/* <section>
          <label htmlFor='arrivalAirport'>SMS notification?</label>
          <input
            name='notification'
            type='checkbox'
            value={notification}
            onChange={(e) => setNotification(e.target.value)}
          />
        </section> */}

        <section className='button-submit'>
          <Button
            block
            type='submit'
            variant='success'
            text="Let's Fly-fi"
            disabled={!validateForm()}
          />
        </section>
      </form>
    </div>
  );
}
