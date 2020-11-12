import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import AuthContext from "./context/AuthContext";
import Landing from "./pages/Landing/Landing";
import Register from "./pages/Register";
import Account from "./pages/UserAccount/userAccount";
import Articles from "./pages/Articles/Articles";
import Plant from "./pages/Plant/Plant";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "../src/components/Nav";
import Login from "./pages/Login/Login";
import { setAxiosDefaults } from "./utils/axiosDefaults";
// import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
// import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

library.add(faCheckSquare, faCoffee);

function App() {
  const [jwt, setJwt] = useState("");

  useEffect(() => {
    axios.get("/api/config").then((response) => console.log(response.data));
  }, []);

  useEffect(() => {
    const localJwt = localStorage.getItem("jwt");
    if (localJwt) {
      setJwt(localJwt);
    }
  }, []);

  useEffect(() => {
    if (jwt) {
      setAxiosDefaults(jwt);
      localStorage.setItem("jwt", jwt);
    }
  }, [jwt]);
  return (
    <Router>
      <AuthContext.Provider value={{ jwt, setJwt }}>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path={["/", "/Verdant"]}>
              <Landing />
            </Route>
            <Route exact path={["/signUp"]}>
              <Register />
            </Route>
            <Route exact path={["/Login"]}>
              <Login />
            </Route>
            <Route exact path={["/account"]}>
              <Account />
            </Route>
            <Route exact path={["/plant"]}>
              <Plant />
            </Route>
            <Route exact path={["/Articles"]}>
              <Articles />
            </Route>
          </Switch>
        </div>
      </AuthContext.Provider>
    </Router>
  );
}

export default App;
