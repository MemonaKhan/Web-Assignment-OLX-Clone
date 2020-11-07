import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  import Home from './Home'
  import Categories from './Categories'
  import LoginPopup from './LoginPopup'
  import Products from './Products'
  import ProductDetails from './ProductDetails'

  class AppRouter extends React.Component{
      render(){
          return(
              <Router>
                <Route exact path="/" component={Home}/>
                <Route exact path="/category" component={Categories}/>
                <Route exact path="/login" component={LoginPopup}/>
                <Route exact path="/product" component={Products}/>
                <Route exact path="/product/details" component={ProductDetails}/>
              </Router>
          )
      }
  }

  export default AppRouter;