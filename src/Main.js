import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import Registration from "./Registration";


class Main extends Component {
    render() {
      return (
        <div className="App">
          <Route
					  exact path="/"
				  	render={() => <Home/>}
				  />
          <Route
					  exact path="/registration"
				  	render={() => <Registration/>}
				  />
        </div>
      );
    }
  }
 
export default Main;
