import React from 'react';
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
    setFlightInfo,
  } = props;

  function handleSubmit(event) {
    event.preventDefault();
    setFlightInfo({
      flightNumber: flightNumber,
      departureAirport: departure,
      arrivalAirport: arrival,
    });

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
          <h3>- OR -</h3>
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

        <section className='button-submit'>
          <Button
            className='--default'
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
