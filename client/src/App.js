import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import Account from "./pages/userAccount";
import Articles from "./pages/Articles"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "../src/components/Nav"
import Login from "./pages/Login";

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
          <Route exact path={["/Login"]}>
            <Login/>
          </Route>
          <Route exact path={["/account"]}>
            <Account />
          </Route>
          <Route exact path={["/Articles"]}>
            <Articles />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
