import React from "react";
import { useHistory } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import  ApiCall  from "./api"
import "./css/header.css"


const Header = ({sessionToken}) =>  {
        const history = useHistory();

        /**
         * Check if client is authorized
         */
        const authorize = () => {
            console.log(sessionToken)
            
            // ApiCall("POST", "api/applicant/myapplication", null, sessionToken).then(response => {
            //     history.push('/application')
            // }).catch(error => {
            //     alert("Unauthorized");
            // })
        }
    
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
                                <Nav.Link onClick={() => authorize()}>Application</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            );
      
    
  }
 
export default Header;










