import React, { Component } from 'react'
import NavBar from "./NavBar.js";

export default class RestaurantCreate extends Component {
  constructor()
  {
    super();
    this.state ={
      name:null,
      address:null,
      rating:null,
      email:null,
    }
  }
  
  create()
  {
    fetch('http://localhost:3001/restaurant',{
      method:"Post",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(this.state)
    }).then((result)=>{
      result.json().then((resp)=>{
        alert("Restaurant added")
      })
    })
  }
  render() {
    return (
      <div className='ce'>
    
        <h1 className='hc'>Add Restaurant</h1>
        <div>
          <input onChange={(event)=>{this.setState({name:event.target.value})}}
            placeholder="Restaurant Name"/><br/><br/>
            <input onChange={(event)=>{this.setState({address:event.target.value})}}
            placeholder="Restaurant Address"/><br/><br/>
            <input onChange={(event)=>{this.setState({rating:event.target.value})}}
            placeholder="Restaurant Rating"/><br/><br/>
            <input onChange={(event)=>{this.setState({email:event.target.value})}}
            placeholder="Restaurant Email"/><br/><br/>
            <button className='bt' onClick={()=>{this.create()}}>Add Restaurant</button>
        </div>   
      </div>
    )
  }
}
