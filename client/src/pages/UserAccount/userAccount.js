import React from "react";
import AccountPage from "../../components/UserAccount/index";
import TestImage from "../../Images/nickCage.jpg";
import AlertContext from "../../context/AlertContext";
import EditBtn from "../../components/EditBtn/index";
import userContext from "../../context/userContext";


const userAccount = () => {

  return (
    <div className="container-fluid text-center">
    <div className ="row text-center">
      <div className ="col-md-12 text-center">
        <AccountPage />
      </div>
    </div>
    </div>    
  );
};

export default userAccount;
