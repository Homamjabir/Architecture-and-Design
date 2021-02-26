import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import { Formik } from 'formik';
import * as yup from 'yup';
import  ApiCall  from "./api"
import "./css/login.css"

const Login = ({setSessionToken}) => {

  const [initialValues, setInitialValues] = useState({
    username: '',
    password: ''
  });

  /**
   * Sets the new value
   * @param {JSON} event 
   */
  const onChange = event => {
    setInitialValues(prevState =>  ({
      ...prevState,
      [event.target.name] : event.target.value
    }))
  };  

  /**
   * Called when user submits
   * @param {JSON} values 
   */
  const onSubmit = (values) => {
    setSessionToken("tjena")
    ApiCall("POST", "api/applicant/login", values, null).then(response => {
      alert("login succesfull");
      setSessionToken(response.TOKEN)
      console.log(response)
    }).catch(error => {
      alert("invalid username or password");
    })
    
  }

  
  const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
  });


  return (
    <div className="loginContainer">

      <div className="loginFormContainer">
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