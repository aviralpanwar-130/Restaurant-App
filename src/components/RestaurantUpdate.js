import React, { Component, useEffect, useState} from 'react';
import { json, useParams } from 'react-router-dom';
import NavBar from "./NavBar.js";


const RestaurantUpdate = () => {
  const { id } = useParams();

const [name, setName] = useState('')
const [address, setAddress] = useState('')
const [rating, setRating] = useState('')
const [email, setEmail] = useState('')

  useEffect(() => {
      fetch(`http://localhost:3001/restaurant/${id}`)
      .then(res => res.json())
      .then(res => {
        console.log(typeof(res))
        setName(res.name)
        setAddress(res.address)
        setRating(res.rating)
        setEmail(res.email)
        
      })
  },[])
  const data = {
    name: name,
    address: address,
    rating: rating,
    email: email
  }

  const update = ()=>
  {
    
    fetch('http://localhost:3001/restaurant/'+id,{
      method:"PUT",
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(data)
    }).then((result)=>{
      result.json().then((resp)=>{
        alert("Restaurant updated")
      })
    })
  }
  const handleOnChangeName = (event)=>{
    
    setName(event.target.value)
    
  }
  const handleOnChangeAddress = (event)=>{
    
    setAddress(event.target.value)
    
  }
  const handleOnChangeRating = (event)=>{
    
    setRating(event.target.value)
    
  }
  const handleOnChangeEmail = (event)=>{
    
    setEmail(event.target.value)
   
  }
    
    return (
      <div className='ue'>
      
      <h1 className='hh'>Restaurant Update</h1>
       <div>
         
            <div><input value={name} onChange={handleOnChangeName}
            placeholder="Restaurant Name"/><br/><br/>
             <input value={address} onChange={handleOnChangeAddress}
            placeholder="Restaurant Address"/><br/><br/>
            <input value={rating} onChange={handleOnChangeRating}
            placeholder="Restaurant Rating"/><br/><br/>
            <input value={email} onChange={handleOnChangeEmail}
            placeholder="Restaurant Email"/><br/><br/>
            <button className='bt' onClick={update}>Update Restaurant</button>
        </div>  

         
            
         
      </div>
      </div>

    )
  }
export default RestaurantUpdate
