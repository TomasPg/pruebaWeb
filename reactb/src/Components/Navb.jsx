import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo1.png'

function Navb() {
  return (
    <Navbar expand="lg" id="navb">
      <Container>
      <Navbar.Brand href="" className="">
          <img className='logo'
            src={logo}
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="container">
            <Nav.Link href="">Home</Nav.Link>
            <Nav.Link href="">About</Nav.Link>
            <Nav.Link href="">Computer</Nav.Link>
            <Nav.Link href="">Laptop</Nav.Link>
            <Nav.Link href="">Products</Nav.Link>
            <Nav.Link href="">Contact Us</Nav.Link>
            <Nav.Link href="">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>);
}

export default Navb;