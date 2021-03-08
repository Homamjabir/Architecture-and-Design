import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Form'
import { Formik } from 'formik';
import * as yup from 'yup';
import  ApiCall  from "./api"
import { useTranslation } from 'react-i18next';
import { useLocation } from "react-router-dom";
import "./css/incomplete.css"

const Incomplete = () => {

  const [showEmailForm, setShowEmailForm] = useState(false);
  const [initialValues, setInitialValues] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    email: '',
    username: ''
  });
  const { t, i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    console.log(location.state)
    whatToShow(location.state)
  },[])

  const whatToShow = (userCredentials) => {
    if(userCredentials.email === "") {
      setShowEmailForm(true);
      initialValues.username = "tempString";
    }
    else {
      setShowEmailForm(false);
      initialValues.email = "tempString";
    }
  }

  


  /**
   * Uppdates the state that has changed
   * @param {event} event 
   */
  const onChange = (event) => {
    console.log(event.target.value)
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

      values.username = location.state.username;
      values.password = location.state.password;

    ApiCall("POST", "api/applicant/update", values, null).then(response => {
      
      //alert("registration succesfull");
    }).catch(error => {
      alert(error.message);
    })
  }

  const schema = yup.object().shape({
    firstName: yup.string().required(t("validationFirstName")),
    lastName: yup.string().required(t("validationLastName")),
    dob: yup.number("Enter a number").required(t("validationDOB")).positive("Positive number").integer("Number"),
    // email: yup.string().email(t("validationEmail.inv")).required(t("validationEmail.req")),
    // username: yup.string().required(t("validationUsername"))
  });
  
  return (
    <div className="incompleteContainer">
        <h1>
            {t("incompleteText")}
        </h1>
        <div className="incompleteFormContainer">

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

                <Form.Group as={Col} md="6" >
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



                {showEmailForm ?                 
                  <Form.Group as={Col} md="6" >
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
                  </Form.Group> : 
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
                  }

              </Form.Row>

              <Button type="submit">{t("incompleteButton")}</Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
 
export default Incomplete;