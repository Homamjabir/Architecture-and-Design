import React from "react";
import { useTranslation } from 'react-i18next';
import "./css/application.css"

const AllUsers = () =>  {
    const { t, i18n } = useTranslation();
    return (
        <div className = "applicationContainer">
            <div className = "applicationFormContainer">
                <p>{t("allUsersText")}</p>
            </div>
            
        </div>
    );
      
    
  }
 
export default AllUsers;