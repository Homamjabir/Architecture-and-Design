import React, { Component } from "react";
import { Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/home";
import Login from "./components/login"
import Registration from "./components/registration";
import Header from "./components/header";
import Footer from "./components/footer"


class App extends Component {
    render() {
      return (
        <div className="App">
			
			<header className="App-header">
				<Header />
			</header>

          	<Route
				exact path="/"
				render={() => <Home/>}
			/>
			<Route
				exact path="/login"
				render={() => <Login/>}
			/>
			<Route
				exact path="/registration"
				render={() => <Registration/>}
			/>

			<footer>
				<Footer />
			</footer>
        </div>
      );
    }
  }
 
export default App;
