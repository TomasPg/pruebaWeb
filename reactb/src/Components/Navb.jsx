import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navb() {
  return (
    <Navbar expand="lg" className="navb">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
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