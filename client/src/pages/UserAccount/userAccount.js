import React from "react";
import AccountPage from "../../components/UserAccount/index";
import SavedArticles from "../../components/SavedArticles";
import SavedPlants from "../../components/SavedPlants";

const userAccount = () => {
  return (
    <div className="container-fluid text-center accountBackground">
      <div className="row text-center">
        <div className="col-md-12 text-center">
          <AccountPage />
          <SavedArticles />
          <SavedPlants />
        </div>
      </div>
    </div>
  );
};

export default userAccount;
