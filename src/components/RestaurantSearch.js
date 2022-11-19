import React, { Component } from 'react'
import {Table, Form, Container, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import NavBar from "./NavBar.js";

export default class RestaurantSearch extends Component {

  constructor(){
    super()
    this.state={
      searchData:null,
      noData:false,
      lastSearch:""
    }
  }

  search(key)
  {
    console.warn(key);
    this.setState({lastSearch:key})
    fetch('http://localhost:3001/restaurant?q='+key).then((result)=>{
      result.json().then((resp)=>{
        console.warn("resp",resp)
        if(resp.length>0){
          this.setState({searchData:resp,noData:false})
        }
        else
        {
          this.setState({noData:true,searchData:null})
        }
        
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
          this.search(this.state.lastSearch);
        })
      })
    }


  render() {
    return (
      <div className='se'>
      <Container>
        <h1>Restaurant Search</h1>
        
        <Form.Control type='text' onChange={(event)=>{this.search(event.target.value)}} placeholder="Search Restaurant" />
        <div className='tab'>
        
          {
            this.state.searchData?
            <Table>
          <thead>
           <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Rating</th>
            <th>Email</th>
            <th>Edit / Delete</th>
           </tr>
          </thead>
          <tbody>
            
            {
              this.state.searchData.map((item)=>
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
            
            :
            <div>{null}</div>
          }
          {
            this.state.noData?<h3>No Data Found</h3>:null
          }
        </div>
      </Container>
      </div>
    )
  }
}
