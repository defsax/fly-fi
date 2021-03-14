import React from "react";
import Credits from "./home/Credits"
import Error from "./home/Error"
import Home from "./home/Home"
import Loading from "./home/Loading"
import Login from "./home/Login"
import Map from "./home/Map"
import Nav from "./home/Nav"
import Register from "./home/Register"
import Results from "./home/Results"
import Button from "./Button"

export default function Welcome() {
  return(
    <div>
      <Nav />
      <h1>I am welcome component  </h1>
      <Credits />
      <Error />
      <Home />
      <Loading />
      <Login />
      <Map />
      <Register />
      <Results />
      <Button disabled={false} text ={'lets fly'}/>
    </div>
  )
}