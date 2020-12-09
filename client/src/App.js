import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import AlertContext from "./context/AlertContext";
import userContext from "./context/userContext";
import Landing from "./pages/Landing/Landing";
import Register from "./pages/Register/Register";
import Account from "./pages/UserAccount/userAccount";
import Articles from "./pages/Articles/Articles";
import Plant from "./pages/Plant/Plant";
// import Chat from "./pages/Chat/Chat";
import Join from "./components/Join/Join"
import Chat from "./components/Chat/chat"
import Alert from "./components/Alert/Alert";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "../src/components/Nav";
import Footer from "../src/components/Footer/Footer";
import Login from "./pages/Login/Login";
import { setAxiosDefaults } from "./utils/axiosDefaults";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

library.add(faCheckSquare, faCoffee);

function App() {
  const [alert, setAlert] = useState({
    message: "",
    type: "success",
  });
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
  }, [jwt]); // anytime the jot changes I want to call something
  return (
    <Router>
      <userContext.Provider value={{ jwt, setJwt }}>
        <div className="App">
          <AlertContext.Provider value={{ ...alert, setAlert: setAlert }}>
            <Nav />
            <Alert />
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
              <Route exact path={["/api/account/:id"]}>
                <Account />
              </Route>
              <Route exact path={["/plant"]}>
                <Plant />
              </Route>
              <Route exact path={["/Articles"]}>
                <Articles />
              </Route>
              <Route exact path={["/join"]}>
                <Join />
              </Route>
              <Route path={["/chat"]}>
                <Chat />
              </Route>
            </Switch>
          </AlertContext.Provider>
          <Footer />
        </div>
      </userContext.Provider>
    </Router>
  );
}

export default App;
