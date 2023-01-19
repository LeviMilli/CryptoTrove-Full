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
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">CryptoTrove</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

          </Nav>
          {user ? (     
          <Nav className='links'>
            <Nav.Link href="#deets">Market Sentiment</Nav.Link>
            <Nav.Link href="/news">News</Nav.Link>
            <Nav.Link onClick={handleLogOut} href="/">Logout</Nav.Link>
          </Nav>
            ) : (          
          <Nav>
            <Nav.Link href="#deets">Market Sentiment</Nav.Link>
            <Nav.Link href="/news">News</Nav.Link>
            <Nav.Link href="/signin">Login</Nav.Link>
            <Nav.Link href="/signup">Sign Up</Nav.Link>
          </Nav>
          ) }

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;