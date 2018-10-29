import React, { Component } from 'react';
import './style.css';
import LLoguersLListat from '../LLoguersLListat'
import {lloguers} from '../../data'

class App extends Component {

  render() {
    return (
	    <div className="App">
	        <header className="App-header">    
	        	<p>Lloguers</p>
	        </header>
	        <LLoguersLListat lloguers={lloguers}/>
	        
	    </div>

    );
  }
}

export default App;
