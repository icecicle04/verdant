import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import Account from "./pages/userAccount";
import Plant from "./pages/Plant";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "../src/components/Nav";
// import LogInForm from "./components/Form";

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
          {/* <Route exact path={["/Login"]}>
            <LogInForm/>
          </Route> */}
          <Route exact path={["/account"]}>
            <Account />
          </Route>
          <Route exact path={["/plant"]}>
            <Plant />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
