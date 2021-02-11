import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import { Formik } from 'formik';
import * as yup from 'yup';
import  ApiCall  from "./api"
import "./css/login.css"

const Login = () => {


  const onSuasdbmit = (data) => {

    
    ApiCall("POST", "api/applicant/login", data)
   
  }

  const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
  });


  return (
    <div className="loginContainer">
      <div className="loginFormContainer">
        <Formik
          validationSchema={schema}
          onSubmit={onSuasdbmit}
          initialValues={{
            username: '',
            password: ''
          }}
        >
          {({
            handleSubmit,
            handleChange,
            values,
            errors,
          }) => (
            <Form noValidate onSubmit={handleSubmit}>

              <Form.Row>

                <Form.Group as={Col} md="6" controlId="validationFormik01">

                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    isInvalid={!!errors.username}
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.username}
                  </Form.Control.Feedback>

                </Form.Group>

                <Form.Group as={Col} md="6" controlId="validationFormik01">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    isInvalid={!!errors.password}
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>

              </Form.Row>

              <Button type="submit">Log in</Button>
            </Form>
          )}
        </Formik>
      </div>
      <p>
        Dont have an account? <Nav.Link href="/registration"><strong>Sign up here</strong></Nav.Link>
      </p>
    </div>
  );
}
 
export default Login;