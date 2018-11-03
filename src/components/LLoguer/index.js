import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import { collect, store } from 'react-recollect';
import './style.css';
import LLoguersLListat from '../LLoguersLListat'
import {lloguers} from '../../data'


class LLoguer extends Component {

  render() {
    return (
    	<Router>
		    <div className="App">
		        <header className="App-header">    
		        	<p>Lloguers</p>
		        </header>
		        <LLoguersLListat/>		        	        
		    </div>
	    </Router>
    );
  }
}

export default collect(LLoguer)