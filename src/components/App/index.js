import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import './style.css';
import Inici from '../Inici'
import LLoguersLListat from  '../LLoguersLListat'
import ComponentNoTrobat from '../ComponentNoTrobat'



class App extends Component {
  render() {
    return (
      <Router>          
          <Switch>
            <Route exact path='/' component={Inici}></Route>
            <Route exact path='/lloguers' component={LLoguersLListat}></Route>
            <Route component={ComponentNoTrobat}></Route>
          </Switch>
     
      </Router>
    );
  }
}

export default App;