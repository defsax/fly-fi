import React from 'react';
import Button from '../../Button';
import '../../../styles/css/my_flights.css';

export default function MyFlights(props) {
  const { hideForm, currentUser } = props;

  const favFlights = function () {
    if (currentUser.flights.length !== 0) {
      return currentUser.flights.map((e, index) => {
        console.log(e.flight_number);
        return (
          <div className='singleflight' key={index}>
            {e.flight_number}
          </div>
        );
      });
    } else {
      return (
        <div className='singleflight'>There aren't any flights you track</div>
      );
    }
  };

  return (
    <div className='my_flights'>
      <section className='my_flights--label'>
        <h3> My Flights: </h3>

        {favFlights()}

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
