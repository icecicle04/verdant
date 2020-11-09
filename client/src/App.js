import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import Landing from "./pages/landing";

function App() {
  useEffect(() => {
    axios.get("/api/config").then((response) => console.log(response.data));
  }, []);
  return (
    <div className="App">
      <Landing />
    </div>
  );
}

export default App;
