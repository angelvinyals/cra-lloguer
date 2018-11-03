import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import { collect } from 'react-recollect';
import store from '../../data';
import './style.css';


class LLoguersItem extends Component {

	  	

  	render() {

  		const { match} = this.props
		const itemLLoguer = store.lloguers[match.params.itemLLoguer]
		console.log(itemLLoguer)

    	return (
	    	<div>
	    	<p>item  lloguerItem :</p>
	    	<p>{match.path}</p>
	    	<p>{match.url}</p> 
	    	<p>{itemLLoguer.id}</p>
	    	</div>	    	
    	)
  	}
}

export default collect(LLoguersItem);