import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import { Formik } from 'formik';
import * as yup from 'yup';
import  ApiCall  from "./api"
import "./css/registration.css"


const Registration = () => {

  const [initialValues, setInitialValues] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    username: '',
    email: '',
    password: ''
  });

  /**
   * Uppdates the state that has changed
   * @param {event} event 
   */
  const onChange = (event) => {
    setInitialValues(prevState =>  ({
      ...prevState,
      [event.target.name] : event.target.value
    }))
  };  

  /**
   * Makes a signup request with the recevied values
   * and displays the result to the user in an alert
   * @param {JSON} values 
   */
  const onSubmit = (values) => {
    ApiCall("POST", "api/applicant/signup", values, null).then(response => {
      alert("registration succesfull");
    }).catch(error => {
      alert(error.message);
    })
 
  }

  const schema = yup.object().shape({
    firstName: yup.string().required("First name required"),
    lastName: yup.string().required("Last name required"),
    dob: yup.number("Enter a number").required("Date of birth required").positive("Positive number").integer("Number"),
    username: yup.string().required("Username required"),
    email: yup.string().email('Invalid email').required('Email required'),
    password: yup.string().required("Password requierd"),
  });
  
  return (
    <div className="registrationContainer">
      <div className="registrationFormContainer">
        <Formik
          enableReinitialize={true}
          validationSchema={schema}
          onSubmit={onSubmit}
          onChange={onChange}
          initialValues={initialValues}
        >
          {({
            handleSubmit,
            errors,
            }) => (
            <Form noValidate onSubmit={handleSubmit}>

              <Form.Row>

              <Form.Group as={Col} md="6" >
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    defaultValue={initialValues.firstName}
                    onChange={onChange}
                    isInvalid={errors.firstName}
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.firstName}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="6" >
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    defaultValue={initialValues.lastName}
                    onChange={onChange}
                    isInvalid={errors.lastName}
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.lastName}
                  </Form.Control.Feedback>
                </Form.Group>

              </Form.Row>


              <Form.Row>

                <Form.Group as={Col} md="6" >
                  <Form.Label>Date of Birth</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Date of Birth"
                    name="dob"
                    defaultValue={initialValues.dob}
                    onChange={onChange}
                    isInvalid={!!errors.dob}
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.dob}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="6" >
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    name="username"
                    defaultValue={initialValues.username}
                    onChange={onChange}
                    isInvalid={!!errors.username}
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.username}
                  </Form.Control.Feedback>
                </Form.Group>

              </Form.Row>

              <Form.Row>

                <Form.Group as={Col} md="6" >
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    name="email"
                    defaultValue={initialValues.email}
                    onChange={onChange}
                    isInvalid={!!errors.email}
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="6" >
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    defaultValue={initialValues.password}
                    onChange={onChange}
                    isInvalid={!!errors.password}
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>

              </Form.Row>

              <Button type="submit">Sign up</Button>
            </Form>
          )}
        </Formik>
      </div>
      <p>
        Already have an account? <Nav.Link href="/login"><strong>Log in here</strong></Nav.Link>
      </p>
    </div>
  );
}
 
export default Registration;