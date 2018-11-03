import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import { collect } from 'react-recollect';
import store from '../../data';
import {
  Link,
  Route
} from 'react-router-dom'
import LLoguersItem from '../LLoguersItem'
import './style.css';

class LLoguersLListat extends Component {

  	render() {
  		console.log(store.lloguers)
		const arrayLLoguers = Object.values(store.lloguers)
		console.log(arrayLLoguers)
    	return (
    		<Router>
			    <div className="Lloguers">
			        <header className="App-header">    
			        	<p>Lloguers</p>
			        </header>
			        <ul>
			        	{arrayLLoguers.map((ll, k) =>
			        		<li key={k}>
			        			<Link 
			        				to={`/lloguers/${ll.id}`}
									className={'link'}
			        			>
			        				{ll.nom}
			        			</Link>
			        		</li>
			        	)}
			        </ul>

			        <Route path={`/lloguers/:itemLLoguer`} component={LLoguersItem}/>	        	        
			    </div>
		    </Router>
    	)
  	}
}

export default collect(LLoguersLListat);
