import React from "react";

export default function Loading(props) {
  return(
    <main className="appointment__card appointment__card--status">
      <h1>I am Loading component</h1>
      <img
        className="appointment__status-image"
        src="images/status.png"
        alt="Loading"
      />
      <h1 className="text--semi-bold">{props.message}</h1>
    </main>
  )
}