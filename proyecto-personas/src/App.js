import React from 'react';
import {Route, Router} from 'react-router'
import Home from '../src/views/home'
import PropTypes from 'prop-types'
import userDetail from './views/userDetail'
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <Router history={this.props.history}>
        <div className ="App">
        <Route exact path="/" component={Home}/>
        <Route path="/detail/:userId" component={userDetail}/>
        </div>


      </Router>

     );
  }
}
 
App.proptype = {
  history:PropTypes.any.isRequired
}
