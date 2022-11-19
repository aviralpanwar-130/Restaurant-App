import React, { Component } from 'react'
import NavBar from "./NavBar.js";
export default class RestaurantDetails extends Component {
  render() {
    return (
      <div className='de'>
      
        <h1 className='hh'>About</h1>
        <p className='hp'>This application can be used to store and maintain details about<br/>
        various restaurants present in a region. You can perform operations  <br/>like
        creation, deletion, updation using this app. You can also search <br/>among the
         listed restaurants.<br/><br/><br/>
         This application is made using:-<br/>
         HTML, CSS, JS & React JS.<br/><br/>
         </p>
         <p className='hpp'>Made by:- Aviral Panwar</p>
      </div>
    )
  }
}
