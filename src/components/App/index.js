import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import './style.css';
import Inici from '../Inici'
import LLoguer from  '../LLoguer'
import ComponentNoTrobat from '../ComponentNoTrobat'
import {lloguers} from '../../data'


class App extends Component {
  render() {
    return (
      <Router>          
          <Switch>
            <Route exact path='/' component={Inici}></Route>
            <Route exact path='/lloguers' component={LLoguer}></Route>
            <Route component={ComponentNoTrobat}></Route>
          </Switch>
     
      </Router>
    );
  }
}

export default App;