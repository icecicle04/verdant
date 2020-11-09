import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "../src/components/Nav"

function App() {
  useEffect(() => {
    axios.get("/api/config").then((response) => console.log(response.data));
  }, []);
<<<<<<< HEAD
  return <div className="App">Hello World</div>;
=======
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
        </Switch>
      </div>
    </Router>
  );
>>>>>>> c9a5ca56ed702e7fb5b8cdcfbd6a93f74df19213
}

export default App;
