import React, { useState } from "react";

const Registration = () => {

  const[email, setEmail] = useState("");
  const[username, setUsername] = useState("");
  const[password, setPassword] = useState("");
  const[firstname, setFirstname] = useState("");
  const[lastname, setLastname] = useState("");
  const[dob, setDob] = useState("");

  const onChange = event => {
    switch(event.target.name) {
      case "email":
        setEmail(event.target.value);
        break;
      case "username":
        setUsername(event.target.value);
        break;
      case "password":
        setPassword(event.target.value);
        break;
      case "firstname":
        setFirstname(event.target.value);
        break;
      case "lastname":
        setLastname(event.target.value);
        break;
      case "dob":
        setDob(event.target.value);
        break;
    }
  }

  const signUp = () => {
    
    var jsonForRealAPI = {
      "firstname":firstname,
      "lastname":lastname,
      "username":username,
      "email":email,
      "password":password,
      "dob":dob
    }

    if(validateInput(jsonForRealAPI))
      console.log(jsonForRealAPI)

      
    /*fetch("http://localhost:8000/api/applicant", {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(jsonForRealAPI)
    },
    ).then(response => response.json()).then(data => console.log(data));*/

    
  }

  const validateInput = (jsonClientData) => {
    if((jsonClientData.firstname === "") || 
        (jsonClientData.lastname === "") || 
        (jsonClientData.username === "") || 
        (jsonClientData.password === "") || 
        (jsonClientData.dob === "") || 
        !(validateEmail(jsonClientData.email)))
      return false;

    return true;
  }

  const validateEmail = (clientEmail) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(clientEmail).toLowerCase());
  }

  return (
      <div className = "registrationContainer">
        <div className = "registrationHeader">
          <h1>
            Registration Page
          </h1>
        </div>

        <div className = "inputContainer">
          <form className = "inputForm">
            <div className = "column">
              <div>
                <input
                    name="email"
                    type="email"
                    required
                    className = "form"
                    onChange={onChange}
                    placeholder="Email Address"
                />
              </div>
              <div>
                <input 
                    name="username"
                    type="text"
                    required
                    className = "form"
                    onChange={onChange}
                    placeholder="Username"
                />
              </div>
              <div>
                <input 
                    name="password"
                    type="password"
                    required
                    className = "form"
                    onChange={onChange}
                    placeholder="Password"
                />
              </div>
            </div>
            <div></div>
            <div className = "column">
              <div>
                <input 
                    name="firstname"
                    type="text"
                    required
                    className = "form"
                    onChange={onChange}
                    placeholder="Firstname"
                />
              </div>
              <div>
                <input 
                    name="lastname"
                    type="text"
                    required
                    className = "form"
                    onChange={onChange}
                    placeholder="Lastame"
                />
              </div>
              <div>
                <input 
                    name="dob"
                    type="text"
                    required
                    className = "form"
                    onChange={onChange}
                    placeholder="Date of Birth"
                />
              </div>
            </div>
            <input id = "btn" type="submit"onClick={()=>signUp()}></input>
          </form>
        </div>
      </div>
  );
}
 
export default Registration;