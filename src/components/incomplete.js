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
    name: '',
    surname: '',
    ssn: '',
    email: '',
    username: ''
  });
  const { t, i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    
    whatToShow(location.state)
  },[])

  const whatToShow = (userCredentials) => {
    if(userCredentials.email === "") {
      setShowEmailForm(true);
      initialValues.username = location.state.username;
    }
    else {
      setShowEmailForm(false);
      initialValues.email = location.state.email;
    }
  }

  


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

      //values.username = location.state.username;
      values.password = location.state.password;
      console.log(values)
      
    ApiCall("POST", "api/person/update", values, location.state.accessToken).then(response => {
      //alert("registration succesfull");
      console.log(response)
    }).catch(error => {
      alert(error.error);
    })
  }

  const schema = yup.object().shape({
    name: yup.string().required(t("validationFirstName")),
    surname: yup.string().required(t("validationLastName")),
    ssn: yup.number("Enter a number").required(t("validationDOB")).positive("Positive number").integer("Number"),
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
                    name="name"
                    defaultValue={initialValues.name}
                    onChange={onChange}
                    isInvalid={errors.name}
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="6" >
                  <Form.Label>{t("regLastName")}</Form.Label>
                  <Form.Control
                    type="text"
                    name="surname"
                    defaultValue={initialValues.surname}
                    onChange={onChange}
                    isInvalid={errors.surname}
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.surname}
                  </Form.Control.Feedback>
                </Form.Group>

              </Form.Row>


              <Form.Row>

                <Form.Group as={Col} md="6" >
                  <Form.Label>{t("regDOB")}</Form.Label>
                  <Form.Control
                    type="text"
                    name="ssn"
                    defaultValue={initialValues.ssn}
                    onChange={onChange}
                    isInvalid={!!errors.ssn}
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.ssn}
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