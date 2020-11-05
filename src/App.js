import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {connect} from 'react-redux';
import {set_data} from './store/action'

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





const mapStateToProps = (state) => (
  {
    username: state.username
  }
)
const mapDispatchToProps = (dispatch)=>({
  set_data:()=>dispatch(set_data())
}
)

export default connect(mapStateToProps,mapDispatchToProps)(App);

