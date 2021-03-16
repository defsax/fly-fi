import React from 'react';
import ReactDOM from 'react-dom';
import './styles/scss/index.scss';
import Welcome from './components/Welcome';
import GoogleApiWrapper from "./components/home/Map"
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Welcome />
  </React.StrictMode>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
