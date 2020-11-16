import React, { useContext, useEffect } from "react";
import AlertContext from "../../context/AlertContext";

const Alert = () => {
  const { message, type, setAlert } = useContext(AlertContext);

  useEffect(() =>{
    if(message.length){
        setTimeout(() =>{
            setAlert({message: "", type: ""})
        }, 3000)
    }
  },[message]) // this checks to see if there's a change in message [], then it runs the useEffect and setTimeout
  return (
    <div className="container fixed-top">
      <div className="row">
        <div className="col-sm-12">
          {message && (
            <div class={`alert alert-${type || "primary"}`} role="alert">
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Alert;
