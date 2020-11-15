import React from "react";
import AccountPage from "../../components/UserAccount/index";
import TestImage from "../../Images/nickCage.jpg";
import AlertContext from "../../context/AlertContext";
import EditBtn from "../../components/EditBtn/index";
import userContext from "../../context/userContext";
import SavedArticles from "../../components/SavedArticles";
import SavedPlants from "../../components/SavedPlants";

const userAccount = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-3" />
        <div className="col-md-6 text-center">
          <AccountPage />
          <SavedArticles />
          <div className="row">
          <SavedPlants />
          </div>
        </div>
      </div>
    </div>
  );
};

export default userAccount;
