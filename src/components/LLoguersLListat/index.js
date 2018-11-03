import React, { Component } from 'react';
import {
  Link,
  Route
} from 'react-router-dom'
import LLoguersItem from '../LLoguersItem'
import './style.css';

class LLoguersLListat extends Component {

  	render() {

  		const {lloguers, match} = this.props
		const arrayLLoguers = Object.values(lloguers)
		
    	return (
    	<React.Fragment key={'llistadeLloguers'}>	  
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
	    </React.Fragment>
    	)
  	}
}

export default LLoguersLListat;
