import React from 'react';

export default function Credits(props) {
  console.log('here')
  return (
    <div className="credits">
      <p>Fly-Fi is a single page application built with multiple frameworks as it is shown on the page. <br />LightHouse Labs Final Project</p>
      <section className="contributors">
        <h1>CREDITS:</h1>
        <div>
          <img src={"https://github.com/defsax/fly-fi/blob/master/frontend/public/images/fly-fi-logo.png"} />
          <h1>Perry Defayette</h1>
        </div>
        <div>
          <img src={"https://github.com/defsax/fly-fi/blob/master/frontend/public/images/fly-fi-logo.png"} />
          <h1>Ali Bas</h1>
        </div>
        <div>
          <img src={"https://github.com/defsax/fly-fi/blob/master/frontend/public/images/fly-fi-logo.png"} />
          <h1>Mike Ackison</h1>
        </div>
      </section>

    </div>
  );
}
