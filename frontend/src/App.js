import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Welcome from "./components/Welcome";

export default function App(){
  return(

    <Welcome />


    // <div>
    //   <BrowserRouter>
    //     <Switch>
    //       <Route exact path='/' component={}/>
    //       <Route exact path='/login' component={}/>
    //       <Route exact path='/signup' component={}/>
    //     </Switch>
    //   </BrowserRouter>
    // </div>
  )
};