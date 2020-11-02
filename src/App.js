import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import AppRouter from './containers/router'

class App extends React.Component{
  render(){
    return(
      <div>
        <AppRouter />
      </div>
    )
  }
}

export default App;
