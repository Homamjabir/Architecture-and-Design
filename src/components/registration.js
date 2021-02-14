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



  const onSubmit = (values, {resetForm}) => {
    ApiCall("POST", "api/applicant/signup", values)
    resetForm({})
   
  }

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    dob: yup.string().required(),
    username: yup.string().required(),
    email: yup.string().email('Invalid email').required('Required'),
    password: yup.string().required(),
  });


  
  return (
    <div className="registrationContainer">
      <div className="registrationFormContainer">
        <Formik
          enableReinitialize={false}
          validationSchema={schema}
          onSubmit={onSubmit}
          initialValues={initialValues}
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
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    isInvalid={!!errors.firstName}
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.firstName}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="6" controlId="validationFormik02">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    isInvalid={errors.lastName}
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.lastName}
                  </Form.Control.Feedback>
                </Form.Group>

              </Form.Row>


              <Form.Row>

                <Form.Group as={Col} md="6" controlId="validationFormik03">
                  <Form.Label>Date of Birth</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Date of Birth"
                    name="dob"
                    value={values.dob}
                    onChange={handleChange}
                    isInvalid={!!errors.dob}
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.dob}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="6" controlId="validationFormik04">
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

              </Form.Row>

              <Form.Row>

                <Form.Group as={Col} md="6" controlId="validationFormik05">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="6" controlId="validationFormik06">
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