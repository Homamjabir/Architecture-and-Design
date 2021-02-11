import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import "./css/header.css"


const Header = () =>  {
    
        if(window.location.pathname === '/')
            return null;

        else 
            return (
                <div className = "headerContainer">
                    <Navbar className="navbar" variant="dark" expand="lg">
                        <Navbar.Brand href="#home">Navigation Bar</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/login">Log In</Nav.Link>
                                <Nav.Link href="/registration">Registration</Nav.Link>
                                <Nav.Link href="/application">Application</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            );
      
    
  }
 
export default Header;










