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
	       	<div className="llista">
	        	{arrayLLoguers.map((ll, k) =>
	        		<div 
	        			key={k}
	        			value={ll.id}
	        			onClick={this.handleClick}
	        			className="item"
	        		>
	        		{ll.nom}
	        		</div>
	        	)}
	        </div>
    	)
  	}
}

export default LLoguersLListat;
