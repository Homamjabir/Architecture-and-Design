import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import { Formik } from 'formik';
import * as yup from 'yup';
import  ApiCall  from "./api"
import { Trans, useTranslation } from 'react-i18next';
import "./css/login.css"

const Login = ({setSessionToken}) => {
  const { t, i18n } = useTranslation();
  const history = useHistory();

  const [initialValues, setInitialValues] = useState({
    email: '',
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
    
    if(validateEmail(values.username)) {
      values.email = values.username;
      values.username = '';
    }
    else {
      values.email = '';
    }
    

    ApiCall("POST", "api/person/login", values, null).then(response => {
      alert("login succesfull");
      setSessionToken(response.accessToken)
      
    }).catch(error => {
      
      if(error.accessToken !== undefined)
        history.push({pathname: "/incomplete", state: { "username": values.username, "email": values.email, "password": values.password, "accessToken": error.accessToken}})
      else
        alert("invalid username or password");
    })
    
  }

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  
  const schema = yup.object().shape({
    username: yup.string().required(t("validationUsernameOrPassword")),
    password: yup.string().required(t("validationPassword")),
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

                <Form.Group className="mr-3" as={Col} md="6" >
                  <Form.Label>{t("logUsernameOrEmail")}</Form.Label>
                  <Form.Control
                    type="text"
                    
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
                  <Form.Label>{t("regPassword")}</Form.Label>
                  <Form.Control
                    type="password"
                    
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

              <Button type="submit">{t("logButton")}</Button>
            </Form>
          )}
        </Formik>
      </div>
      <p>
        {t("logText.text1")} <Nav.Link href="/registration"><strong>{t("logText.text2")}</strong></Nav.Link>
      </p>
    </div>
  );
}
 
export default Login;