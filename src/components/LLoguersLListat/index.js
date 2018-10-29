import React, { Component } from 'react';
import {
  Link,
  Route
} from 'react-router-dom'
import LLoguersItem from '../LLoguersItem'
import './style.css';

class LLoguersLListat extends Component {

	handleClick = (e) =>{
		console.log('hi ha un click que es ', e.target.value)
	}

  	render() {

  		const {lloguers} = this.props
		const arrayLLoguers = Object.values(lloguers)
		
    	return (
    	<React.Fragment key={'llistadeLloguers'}>	  
	       	<ul>
	        	{arrayLLoguers.map((ll, k) =>
	        		<li
	        			key={k}
	        			value={ll.id}
	        		>
	        			<Link 
	        				to={`lloguers/${ll.id}`}
							className={'link'}
	        			>{ll.nom}</Link>
	        		</li>
	        	)}
	        </ul>

	        <Route path={`/lloguers/`} component={LLoguersItem}/>
	    </React.Fragment>
    	)
  	}
}

export default LLoguersLListat;
