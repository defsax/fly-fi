import React from "react";
import Error from "./Error"
import Loading from "./Loading"
import Login from "./Login"
import Register from "./Register"
import Results from "./Results"
import Search from "./Search"

export default function SidePanel(props) {

  return(
    <div>
      <h1>This is sidePanel</h1>
      <Error />
      <Loading />
      <Login />
      <Register />
      <Search />
      <Results />
    </div>
  )
}