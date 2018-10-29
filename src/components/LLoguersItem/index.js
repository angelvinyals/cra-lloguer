import React, { Component } from 'react';
import './style.css';


class LLoguersItem extends Component {


  	render() {

  		const {itemLLoguers} = this.props
		
    	return (
	    	
	        	<li>{itemLLoguers.nom}</li>
	    	
    	)
  	}
}

export default LLoguersItem;