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
import "./css/registration.css"


const Registration = () => {
  const history = useHistory();
  const { t, i18n } = useTranslation();

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
      history.push('/login')
      //alert("registration succesfull");
    }).catch(error => {
      alert(error.message);
    })
 
  }

  const schema = yup.object().shape({
    firstName: yup.string().required(t("validationFirstName")),
    lastName: yup.string().required(t("validationLastName")),
    dob: yup.number("Enter a number").required(t("validationDOB")).positive("Positive number").integer("Number")/*.test('len', t("validationDOBLength"), val => val.length === 12)*/,
    username: yup.string().required(t("validationUsername")),
    email: yup.string().email(t("validationEmail.inv")).required(t("validationEmail.req")),
    password: yup.string().required(t("validationPassword")),
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

              <Form.Group className="mr-3" as={Col} md="6" >
                  <Form.Label>{t("regFirstName")}</Form.Label>
                  <Form.Control
                    type="text"
                    
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
                  <Form.Label>{t("regLastName")}</Form.Label>
                  <Form.Control
                    type="text"
                    
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

                <Form.Group className="mr-3" as={Col} md="6" >
                  <Form.Label>{t("regDOB")}</Form.Label>
                  <Form.Control
                    type="text"
                    
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
                  <Form.Label>{t("regUsername")}</Form.Label>
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

              </Form.Row>

              <Form.Row>

                <Form.Group className="mr-3" as={Col} md="6" >
                  <Form.Label>{t("regEmail")}</Form.Label>
                  <Form.Control
                    type="email"
                    
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

              <Button type="submit">{t("regButton")}</Button>
            </Form>
          )}
        </Formik>
      </div>
      <p>
        {t("regText.text1")}<Nav.Link href="/login"><strong>{t("regText.text2")}</strong></Nav.Link>
      </p>
    </div>
  );
}
 
export default Registration;