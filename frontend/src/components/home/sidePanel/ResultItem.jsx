import React, { useEffect, useState } from 'react';
import axios from 'axios';

import '../../../styles/css/result-item.css';

export default function ResultItem(props) {
  const {
    flight,
    setFlightList,
    numberOfResults,
    setCurrentUser,
    currentUser,
  } = props;

  const [checked, setChecked] = useState(false);

  const queue_notification = function (ev, flight_info) {
    //set a table with tracked flight numbers to a state client side?

    const savedFlight = currentUser.savedFlights.find(
      (f) => f.flight_number === flight_info.flight['iataNumber']
    );

    console.log(savedFlight);

    if (ev.target.checked) {
      //set state of currentuser's flight list

      let allUsersFlights = currentUser.savedFlights;

      allUsersFlights.push(flight_info);

      setCurrentUser({ ...currentUser });

      axios
        .post('/save_flight', {
          flight_info: {
            flight_number: flight_info.flight['iataNumber'],
            eta: 1,
          },
        })
        .then((response) => {
          // console.log(response);
          // setCurrentUser()
          //maybe set state?
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
      console.log(currentUser);

      // if (checkIfFlightTracked(flight_info)) {
      //   //remove specfic flight from list
      //   flight_info.filter(function (el) {
      //     console.log('el: ', el);
      //     return el.flight_number !== flight_info.flight['iataNumber'];
      //   });
      //   setCurrentUser({ ...currentUser });
      // }

      // axios
      //   .delete('/delete_flight', {
      //     flight_info: {
      //       // flight_id: currentUser
      //     },
      //   })
      //   .then((response) => {
      //     console.log('flight notification removed from table.', response);
      //   });
    }
  };

  // useEffect(() => {
  //   setChecked(checkIfFlightTracked(flight));
  //   console.log('checked', checked);
  // }, []);

  const isFlightTracked = function (flightList) {
    //see if user is tracking flight from state from backend
    const flightSaved = currentUser.savedFlights.find(
      (f) => f.flight_number === flightList.flight['iataNumber']
    );

    if (flightSaved) {
      return (
        <section>
          <label htmlFor='arrivalAirport'>SMS notification?</label>
          <input
            name='notification'
            type='checkbox'
            value={''}
            checked={true}
            onChange={(e) => {
              queue_notification(e, flightList);
            }}
          />
        </section>
      );
    } else {
      return (
        <section>
          <label htmlFor='arrivalAirport'>SMS notification?</label>
          <input
            name='notification'
            type='checkbox'
            value={''}
            checked={false}
            onChange={(e) => {
              queue_notification(e, flightList);
            }}
          />
        </section>
      );
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

        {props.currentUser.isLoggedIn && isFlightTracked(resultObj)}
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
