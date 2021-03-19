import React from 'react';
import Button from '../../Button';

import ResultItem from './ResultItem';
import '../../../styles/css/results.css';

export default function Results(props) {
  const { flightList, setFlightList } = props;

  const panelList = function (array) {
    return array.map((resultItem, index) => {
      return (
        <ResultItem
          key={index}
          flight={resultItem}
          numberOfResults={array.length}
          setFlightList={() => setFlightList([resultItem])}
        />
      );
    });
  };

  const header = function (array) {
    const number = array.length;
    const string =
      number > 1
        ? `are ${number} flights`
        : number === 1 && array[0].flight
        ? `is only one flight`
        : `is no flight`;
    return (
      <section className='resultHeader'>
        <h3>{`There ${string} for that criteria`}</h3>
      </section>
    );
  };

  return (
    <div className='result-box'>
      <h1 className='result-header'>Flight Information</h1>
      <section className='result-header'>{header(flightList)}</section>

      {panelList(flightList)}

      <section className='button-submit'>
        <Button
          type='button'
          text='Search Again?'
          onClick={props.searchAgain}
          disabled={false}
        />
      </section>
    </div>
  );
}
