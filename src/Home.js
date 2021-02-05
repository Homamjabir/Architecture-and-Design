import React, { Component } from "react";
import {Route} from 'react-router-dom'

class Home extends Component {
    render() {
      return (
        <div className = "homePageContainer">
          <div className = "videoContainer">
              <video autoPlay loop muted>
              <source src="//videos.ctfassets.net/ds6dz7ilx8up/3zsCYZmfrLkqNFtvnJeVBq/66aa467c8617368c9c0390c17be0463a/Monster_tom_web.mp4" type="video/mp4"></source>
              </video>

              <h1>Apply to Work in Gröna Lund</h1>
          
              <button type="button" onClick={() => {}}>Apply</button>  

              <Route render={({ history}) => (
              <button type="button" onClick={() => { history.push('/registration') }}>
                Apply
              </button>
              )} />  
          </div>
        </div>
      );
    }
  }
 
export default Home;