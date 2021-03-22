import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../../../styles/css/result-item.css';
import '../../../styles/css/check-box.css';

export default function ResultItem(props) {
  const {
    flight,
    setFlightList,
    numberOfResults,
    setCurrentUser,
    currentUser,
  } = props;

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const value = currentUser.flights.find((f) => {
      return f.flight_number === flight.flight['iataNumber'];
    });
    setChecked(Boolean(value));
  }, [currentUser, flight]);

  const queue_notification = function (ev, flight_info) {
    //set a table with tracked flight numbers to a state client side?

    if (ev.target.checked) {
      //save flight to db
      axios
        .post('/save_flight', {
          flight_info: {
            flight_number: flight_info.flight['iataNumber'],
            arrival: flight_info.arrival['iataCode'],
            departure: flight_info.departure['iataCode'],
            latitude: flight_info.geography['latitude'],
            longitude: flight_info.geography['longitude'],
            speed: flight_info.speed['horizontal'],
            message: `${currentUser.user.name}, your flight ${flight_info.flight['iataNumber']} from ${flight_info.departure['iataCode']} to ${flight_info.arrival['iataCode']} is about to land in approximately 30 minutes!`,
          },
        })
        .then((response) => {
          setCurrentUser({
            ...currentUser,
            flights: [...response.data.flights],
          });
        });

      //send confirmation text
      axios
        .post('/queue_text', {
          text_info: {
            message: `${currentUser.user.name}, your notification request for flight ${flight_info.flight['iataNumber']} from ${flight_info.departure['iataCode']} to ${flight_info.arrival['iataCode']} is received. Stay tuned!`,
          },
        })
        .then((response) => {
          console.log(response);
          //add flightinfo to the database or viceversa
        });
    } else {
      console.log('do not send notification.');

      //get flight id from match between user's savedFlights and current flight iata number
      const flightId = currentUser.flights.find(
        (f) => f.flight_number === flight_info.flight['iataNumber']
      ).id;

      axios
        .post('/delete_flight', {
          flight_info: {
            flight_id: flightId,
          },
        })
        .then((response) => {
          setCurrentUser({
            ...currentUser,
            flights: [...response.data.flights],
          });
        });
    }
  };

  function formatResults(resultArr) {
    let resultObj = resultArr;

    return (
      <div className='single-result-item'>
        <div className='item'>
          <h5>{resultObj.flight && 'Flight#:'}</h5>
          <p>{resultObj.flight && resultObj.flight['iataNumber']}</p>
        </div>

        <div className='item'>
          <h5>{resultObj.departure && 'Departure:'}</h5>
          <p>{resultObj.departure && resultObj.departure['iataCode']}</p>
        </div>

        <div className='item'>
          <h5>{resultObj.arrival && 'Arrival:'}</h5>
          <p>{resultObj.arrival && resultObj.arrival['iataCode']}</p>
        </div>

        <div className='item'>
          <h5>{resultObj.geography && 'Altitude:'}</h5>
          <p>
            {resultObj.geography &&
              Math.round(resultObj.geography['altitude'] * 3.28)}
            ft
          </p>
        </div>

        <div className='item'>
          <h5>{resultObj.speed && 'Speed:'}</h5>
          <p>
            {resultObj.speed && Math.round(resultObj.speed['horizontal'])}km/h
          </p>
        </div>

        <div className='item'>
          <h5>{resultObj.status && 'Status:'}</h5>
          <p>{resultObj.status && resultObj.status}</p>
        </div>

        {currentUser.isLoggedIn && (
          <section className='check-box'>
            <label htmlFor='arrivalAirport'>SMS notification?</label>
            <input
              name='notification'
              type='checkbox'
              value={''}
              checked={checked}
              onChange={(e) => {
                queue_notification(e, resultObj);
              }}
            />
          </section>
        )}
      </div>
    );
  }

  function multipleFlights(resultArr) {
    return (
      <div className='multiple-result-item'>
        <p onClick={setFlightList}>{resultArr.flight['iataNumber']}</p>
      </div>
    );
  }

  function checkItem(result) {
    return numberOfResults > 1
      ? multipleFlights(result)
      : formatResults(result);
  }

  return <div className='results'>{checkItem(flight)}</div>;
}
