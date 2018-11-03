import React, { Component } from 'react';
import './style.css';
import broken from '../../images/imbroken.gif'

function ComponentNoTrobat (){
	return (
      <div className="page-container">
        <div className="bg" style={{ backgroundImage: 'url(' + broken + ')'}}></div>
        <h1 className="title">404</h1>
        <h1>error 404 - ho sento aquesta pagina  no existeix</h1>
      </div>
    )
}

export default ComponentNoTrobat;