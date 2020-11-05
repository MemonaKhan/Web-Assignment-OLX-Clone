import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  import Home from './Home'
  import Categories from './Categories'
  import LoginPopup from './LoginPopup'

  class AppRouter extends React.Component{
      render(){
          return(
              <Router>
                <Route exact path="/" component={Home}/>
                <Route exact path="/category" component={Categories}/>
                <Route exact path="/login" component={LoginPopup}/>
              </Router>
          )
      }
  }

  export default AppRouter;