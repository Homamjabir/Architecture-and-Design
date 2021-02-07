import React, { Component } from "react";
import emailIcon from "./images/Email-Icon.jpg";
import fullNameIcon from "./images/Full-Name-Icon.png";
import passwordIcon from "./images/Password-Icon.png";
import phoneNumberIcon from "./images/Phone-Number-Icon.png";
import userNameIcon from "./images/Username-Icon.png"

function signUp() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var username = document.getElementById("userName").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var dob = document.getElementById("dob").value;

  var jsonForRealAPI = {
    "firstName":firstName,
    "lastName":lastName,
    "email":email,
    "dob":dob,
    "username":username,
    "password":password
  }

  var jsonForTestAPI = {
    "name":firstName + " " + lastName,
    "email":email
  }

  fetch("http://localhost:5000/api/applicant/signup", {
    method: "POST",
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify(jsonForRealAPI)
  },
  ).then(response => response.json()).then(data => console.log(data));
}
                                   

class Registration extends Component {
    render() {
      return (
          <div className = "registrationContainer">
            <div className = "registrationHeader">
              <h1>
                Registration Page
              </h1>
            </div>

            <div className = "inputContainer" >
              <div>
                <img className = "img1" src={fullNameIcon} width="44" height="31"/>
                <input className = "input input1" id = "firstName" placeholder = "First Name"></input>
              </div>
              <div>
                <img className = "img2" src={phoneNumberIcon} width="35" height="35"/>
                <input className = "input input2" id = "lastName" placeholder = "Last Name"></input>
              </div>
              <div>
                <img className = "img3" src={userNameIcon} width="42" height="42"/>
                <input className = "input input3" id = "userName" placeholder = "Username"></input>
              </div>
              <div>
                <img className = "img4" src={emailIcon} width="38" height="27"/>
                <input className = "input input4" id = "email" placeholder = "Email"></input>
              </div>
              <div>
                <img className = "img5" src={passwordIcon} width="33" height="39"/>
                <input className = "input input5" id = "password" placeholder = "Password"></input>
              </div>
              <div>
                <img className = "img6" src={fullNameIcon} width="44" height="31"/>
                <input className = "input input6" id = "dob" placeholder = "Personal identity number"></input>
              </div> 
            </div>

            <button type="button" onClick={()=>console.log(signUp())}>Sign Up</button>
          </div>
      );
    }
  }
 
export default Registration;