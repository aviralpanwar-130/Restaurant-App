import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import {Link} from 'react-router-dom'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import NavBar from "./NavBar.js";

export default class RestaurantList extends Component {
  constructor(){
    super();
    this.state={
      list:null,
    }
  }

    componentDidMount()
    {
      this.getData();
    }
    
    getData()
    {
      fetch("http://localhost:3001/restaurant").then((response)=>{
        response.json().then((result)=>{
          this.setState({list:result})
        })
      })
    }
    Delete(id)
    {
      fetch('http://localhost:3001/restaurant/'+id,{
        method:"DELETE",
        
       
      }).then((result)=>{
        result.json().then((resp)=>{
          alert("Restaurant Deleted")
          this.getData();
        })
      })
    }
  
  render() {
    return (
      <div className='le'>
      
        <h1 className='hl'>Restaurant List</h1>
        {
          this.state.list?
          <div className='tab'>
          <Table className='table'>
          <thead className='th'>
           <tr className='tr'>
            <th>Name</th>
            <th>Address</th>
            <th>Rating</th>
            <th>Email</th>
            <th>Edit / Delete</th>
           </tr>
          </thead>
          <tbody className='wrapper'>
          {
            this.state.list.map((item,i)=>
            <tr>
              <td>{item.name}</td>
              <td>{item.address}</td>
              <td>{item.rating}</td>
              <td>{item.email}</td>
              <td><Link to={"/update/"+item.id}><FontAwesomeIcon icon={faEdit}/></Link>  <span onClick={()=>this.Delete(item.id)}><FontAwesomeIcon icon={faTrash} color='red'/></span></td>
            </tr>
            )
          } 
          </tbody>
          </Table>
          </div>
          :<p>Please </p>
        }
        
      </div>
    )
  }
}
