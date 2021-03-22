import React from 'react';
import axios from 'axios';
import Button from '../../Button';
import '../../../styles/css/my_flights.css';

export default function MyFlights(props) {
  const { hideForm, currentUser } = props;

  const favFlights = function () {
    return currentUser.flights.map((e, index) => {
      console.log(e.flight_number);
      return <div key={index}>{e.flight_number}</div>;
    });
  };

  return (
    <div className='my_flights'>
      <section className='my_flights--label'>
        <h3> My Flights: </h3>

        <section className='singleflight'>{favFlights()}</section>

        <Button
          type='button'
          text='Close'
          disabled={false}
          className='--cancel'
          onClick={hideForm}
        />
      </section>
    </div>
  );
}
