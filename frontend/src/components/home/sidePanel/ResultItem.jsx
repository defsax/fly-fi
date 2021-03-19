import React from 'react';
import axios from 'axios';

import '../../../styles/css/result-item.css';

export default function ResultItem(props) {
  const { flight, setFlightList, numberOfResults } = props;

  const queue_notification = function (ev, flight_info) {
    //set a table with tracked flight numbers to a state client side?

    if (ev.target.checked) {
      console.log('send notification.');

      axios
        .post('/save_flight', {
          flight_info: {
            flight_number: flight_info.flight['iataNumber'],
            eta: 1,
          },
        })
        .then((response) => {
          console.log(response);
        });

      // axios
      //   .post('/queue_text', {
      //     text_info: {
      //       user: props.username,
      //       message: `your flight ${flight_info.flight['iataNumber']} from ${flight_info.departure['iataCode']} to ${flight_info.arrival['iataCode']} is set to arrive soon (...)!`,
      //     },
      //   })
      //   .then((response) => {
      //     console.log(response);
      //     axios
      //       .post('/save_flight', {
      //         flight_info: {
      //           user: props.username,
      //           flight_number: flight_info.flight['iataNumber'],
      //           eta: 1,
      //         },
      //       })
      //       .then((response) => {
      //         console.log(response);
      //       });
      //     //add flightinfo to the database or viceversa
      //   });
    } else {
      console.log('do not send notification.');

      axios
        .delete('/delete_flight', {
          flight_info: {
            flight_number: flight_info.flight['iataNumber'],
            eta: 1,
          },
        })
        .then((response) => {
          console.log('flight notification removed from table.', response);
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
          <p>{resultObj.geography && resultObj.geography['altitude']}ft</p>
        </div>

        <div className='item'>
          <h5>{resultObj.speed && 'Speed:'}</h5>
          <p>{resultObj.speed && resultObj.speed['horizontal']}km/h</p>
        </div>

        <div className='item'>
          <h5>{resultObj.status && 'Status:'}</h5>
          <p>{resultObj.status && resultObj.status}</p>
        </div>

        {props.isLoggedIn && (
          <section>
            <label htmlFor='arrivalAirport'>SMS notification?</label>
            <input
              name='notification'
              type='checkbox'
              value={''}
              onChange={(e) => queue_notification(e, resultObj)}
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
