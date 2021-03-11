import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import { Formik } from 'formik';
import * as yup from 'yup';
import  ApiCall  from "./api"
import "./css/login.css"

const Application = ({sessionToken}) => {

    const onEnter = () => {
        ApiCall("POST", "api/applicant/myapplication", values, sessionToken).then(response => {

            
            alert("you have access");
            
          }).catch(error => {
            alert("access");
          })
    }

    useEffect(() => {
        onEnter()
    },[])

  return (
    <div className="loginContainer">

      <div className="loginFormContainer">
      <p>
        Restricted page
      </p>
      </div>

    </div>
  );
}
 
export default Application;