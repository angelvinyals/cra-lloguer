import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import './style.css';
import LLoguersLListat from '../LLoguersLListat'
import {lloguers} from '../../data'


class App extends Component {

  render() {
    return (
    	<Router>
		    <div className="App">
		        <header className="App-header">    
		        	<p>Lloguers</p>
		        </header>
		        <LLoguersLListat lloguers={lloguers}/>	

		        	        
		    </div>
	    </Router>

    );
  }
}

export default App;
