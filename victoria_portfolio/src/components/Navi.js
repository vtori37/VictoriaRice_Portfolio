import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
// import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';


function Navi() {
  
  return (
  <div>
    {/* 416px is where it starts to shrink */}
      <Navbar collapseOnSelect expand="lg" b="light" variant="light">
        <Container>
        <Navbar.Brand href="/">Victoria Rice</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#About">About</Nav.Link>
          <Nav.Link href="#Portfolio">Portfolio</Nav.Link>
          <Nav.Link href="#Contact">Contact</Nav.Link>
          <Nav.Link href="#Resume">Resume</Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar> 
  </div>
  );
}

  
 export default Navi;



 