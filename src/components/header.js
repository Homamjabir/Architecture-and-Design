import React from "react";
import { useHistory } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { useTranslation } from 'react-i18next';
import "./css/header.css"

var count = 1;
const Header = ({sessionToken, setSessionToken}) =>  {
        const history = useHistory();

        
const ApiCallGet = (location, authToken) => {

    return fetch("http://localhost:8000/" + location, {
      method: "GET",
      headers: {
        "Content-Type":"application/json",
        'Authorization': 'Bearer ' + authToken
      },
    },
    ).then(response => {
        if(response.status >= 200 && response.status <= 299) 
          return response.json();
        else {
          return response.json().then(err => Promise.reject(err));
        }
    }).then(data => {return data}
    ).catch(error => {
      throw error
    });
  }

        
    const { t, i18n } = useTranslation();

    const onClick = () => {
        console.log(count)
        if(count % 2 === 0)
            i18n.changeLanguage("sv");
        else
            i18n.changeLanguage("en")
        count++;
        console.log(count)
    }

    const authorize = (route, goTO) => {
        ApiCallGet("api/person/" + route, sessionToken).then(respsone => {
            console.log(respsone)
            history.push({pathname: "/"+goTO})
        }).catch(error => {
            alert("NOT AUTHORIZED")
            
        })
    }

    const logOut = () => {
        setSessionToken(null)
        history.push({pathname: "/login"})
    }

    if(window.location.pathname === '/')
        return null;
    else 
        return (
            <div className = "headerContainer">
                <Navbar className="navbar" variant="dark" expand="lg">
                    <Navbar.Brand href="#home">{t("headerText")}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">{t("headerHome")}</Nav.Link>
                            <Nav.Link href="/login">{t("headerLogin")}</Nav.Link>
                            <Nav.Link href="/registration">{t("headerRegistration")}</Nav.Link>
                            <Nav.Link onClick={()=>authorize("protected", "application")}>{t("headerApplication")}</Nav.Link>
                            <Nav.Link onClick={()=>authorize("all-users", "all-users")}>{t("headerAllUser")}</Nav.Link>
                            <Nav.Link onClick={()=>logOut()}>{t("headerLogOut")}</Nav.Link>
                            <Nav.Link onClick={onClick}>{t("headerChangeLanguage")}</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
      
    
  }
 
export default Header;










