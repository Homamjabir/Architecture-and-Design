import React from "react";
import { useHistory } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import i18n from "i18next";
import { Trans, useTranslation } from 'react-i18next';
import  ApiCall  from "./api"
import "./css/header.css"

var count = 1;
const Header = ({sessionToken}) =>  {
        const history = useHistory();

        
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
                                <Nav.Link >{t("headerApplication")}</Nav.Link>
                                <Nav.Link onClick={onClick}>{t("headerChangeLanguage")}</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            );
      
    
  }
 
export default Header;










