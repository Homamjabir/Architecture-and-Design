import React from "react";
import { useTranslation } from 'react-i18next';
import "./css/application.css"

const Application = () =>  {
    const { t, i18n } = useTranslation();
    return (
        <div className = "applicationContainer">
            <div className = "applicationFormContainer">
                <p>{t("applicationPage")}</p>
            </div>
            
        </div>
    );
      
    
  }
 
export default Application;