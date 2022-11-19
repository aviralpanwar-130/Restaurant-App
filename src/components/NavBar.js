import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faHome, faSearch, faLayerGroup, faCircleInfo, faPenNib, faUser } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom'; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar className='nv' variant="">
        <Container>
          <Navbar.Brand href='#' className="rst" >Rstrnt</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className='nl'><Link to="/" style={{textDecoration:'none'}}><FontAwesomeIcon icon={faHome}/>  Home</Link></Nav.Link>
            <Nav.Link ><Link to="/search" style={{textDecoration:'none'}}><FontAwesomeIcon icon={faSearch}/>  Search</Link></Nav.Link>
            <Nav.Link ><Link to="/list" style={{textDecoration:'none'}}><FontAwesomeIcon icon={faList}/> List</Link></Nav.Link>
            <Nav.Link ><Link to="/create" style={{textDecoration:'none'}}><FontAwesomeIcon icon={faLayerGroup}/>  Create</Link></Nav.Link>
            <Nav.Link ><Link to="/update/:id" style={{textDecoration:'none'}}><FontAwesomeIcon icon={faPenNib}/>  Update</Link></Nav.Link>
            <Nav.Link ><Link to="/details" style={{textDecoration:'none'}}><FontAwesomeIcon icon={faCircleInfo}/>  About</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
    )
  }
}
