import React from "react";
import "./css/footer.css"


const Footer = () =>  {
    
    if(window.location.pathname === '/')
        return null;

    else 
        return (
            <div className = "footerContainer">
                <p>
                    HAMMARBY HAMMARBY HAMMARBY
                </p>
            </div>
        );
    
}

 
export default Footer;
