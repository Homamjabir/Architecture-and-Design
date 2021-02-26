import React, { Component, useState } from "react";
import { Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/home";
import Login from "./components/login"
import Registration from "./components/registration";
import Application from "./components/application";
import Header from "./components/header";
import Footer from "./components/footer"

export default function App() {

	const [sessionToken, setSessionToken] = useState(null);
 
    return (
        <div className="App">
			
			<header className="App-header">
				<Header sessionToken={sessionToken}/>
			</header>

          	<Route
				exact path="/"
				render={() => <Home/>}
			/>
			<Route
				exact path="/login"
				render={() => <Login setSessionToken={setSessionToken}/>}
			/>
			<Route
				exact path="/registration"
				render={() => <Registration/>}
			/>
			<Route
				exact path="/application"
				render={() => <Application/>}
			/>

			<footer>
				<Footer />
			</footer>
        </div>
    );
    
}
 

