import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AppContext } from "../../context/coin.context";
import { useEffect, useState, useContext } from "react";
import "./Navbar.css"

function CollapsibleExample() {


  const { 
    user, handleLogOut,  myRecipe
  }  = useContext(AppContext)

  


  return (
    <Navbar id='blackNav' collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand id='mainHover' style={{"color" : "#f7931a"}} href="/">CryptoTrove</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

          </Nav>
          {user ? (     
          <Nav className='links'>
            <Nav.Link style={{"color" : "#90EE90"}} href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/sentiment">Market Sentiment</Nav.Link>
            <Nav.Link href="/news">News</Nav.Link>
            
            <Nav.Link style={{"color" : "#FF5733"}} onClick={handleLogOut} href="/">Logout</Nav.Link>
          </Nav>
            ) : (          
          <Nav>
            <Nav.Link style={{"color" : "#90EE90"}} href="/signin">Login</Nav.Link>
            <Nav.Link href="/signup">Sign Up</Nav.Link>
            <Nav.Link href="/sentiment">Market Sentiment</Nav.Link>
            <Nav.Link href="/news">News</Nav.Link>

          </Nav>
          ) }

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;