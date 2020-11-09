import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import Landing from "./pages/landing";
import Register from "./pages/Register";
import Account from "./pages/userAccount";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "../src/components/Nav"
import LogInForm from "./components/Form/logInForm";

function App() {
  useEffect(() => {
    axios.get("/api/config").then((response) => console.log(response.data));
  }, []);
  return (
    <Router>
      <div className="App">
      <Nav />
        <Switch>
          <Route exact path={["/", "/Verdant"]}>
            <Landing />
          </Route>
          <Route exact path={["/Register"]}>
            <Register />
          </Route>
<<<<<<< HEAD
          <Route exact path={["/Login"]}>
            <LogInForm />
=======
          <Route exact path={["/account"]}>
            <Account />
>>>>>>> 14884e2661bf893d329f9b81cad3c7d9a839a8cd
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
