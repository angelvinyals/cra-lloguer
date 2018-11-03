import React, { Component } from 'react';
import './style.css';
import {lloguers} from '../../data'


class LLoguersItem extends Component {

	state = {
    	itemLLoguer: null
  	}	
  	

  	render() {

  		const { match} = this.props
		const itemLLoguer = lloguers[match.params.itemLLoguer]
		console.log(itemLLoguer)

    	return (
	    	<div>
	    	<p>item  lloguerItem :</p>
	    	<p>{match.path}</p>
	    	<p>{match.url}</p> 
	    	</div>	    	
    	)
  	}
}

export default LLoguersItem;