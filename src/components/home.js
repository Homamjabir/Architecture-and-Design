import React from "react";
import Nav from 'react-bootstrap/Nav'

import "./css/home.css"

const Home = () => {

  return (
    <div className = "homePageContainer">
      <div className = "videoContainer">
          <video autoPlay loop muted>
            <source src="//videos.ctfassets.net/ds6dz7ilx8up/3zsCYZmfrLkqNFtvnJeVBq/66aa467c8617368c9c0390c17be0463a/Monster_tom_web.mp4" type="video/mp4"></source>
          </video>

          <h1>Apply to Work in Gröna Lund</h1>

          <Nav.Link href="/registration"><button type="button">Continue to Registraion</button></Nav.Link>

      </div>
    </div>
  );
}
 
export default Home;