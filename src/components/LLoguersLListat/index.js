import React, { Component } from 'react';
import './style.css';

class LLoguersLListat extends Component {

	handleClick = (e) =>{
		console.log('hi ha un click que es ', e.target.value)
	}

  	render() {

  		const {lloguers} = this.props
		const arrayLLoguers = Object.values(lloguers)
		
    	return (	  
	       	<ul>
	        	{arrayLLoguers.map((ll, k) =>
	        		<li
	        			key={k}
	        			value={ll.id}
	        			onClick={this.handleClick}
	        		>
	        		<a href="#">{ll.nom}</a>
	        		
	        		</li>
	        	)}
	        </ul>
    	)
  	}
}

export default LLoguersLListat;
