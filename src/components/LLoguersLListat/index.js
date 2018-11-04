import React, { Component } from 'react';
import { collect } from 'react-recollect';
import Button from 'antd/lib/button';
import store from '../../data';
import {
  Link,
  Route
} from 'react-router-dom'
import LLoguersItem from '../LLoguersItem'
import MenuPrincipal from '../MenuPrincipal'
import './style.css';

class LLoguersLListat extends Component {

  	render() {
  		console.log(store.lloguers)
		const arrayLLoguers = Object.values(store.lloguers)
		console.log(arrayLLoguers)
    	return (
    	
			    <div className="Lloguers">
			        <MenuPrincipal/>
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

			        	        	        
			    </div>
		  
    	)
  	}
}

export default collect(LLoguersLListat);
