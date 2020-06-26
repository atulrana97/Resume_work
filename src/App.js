import React from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Main from "./Main";
import { BrowserRouter as Router } from "react-router-dom";
import Landing from "./Landing";

function App() {
  return (
    <div className="App">
      <Router>
        <Landing />
        <Navbar />
        <Main />
      </Router>
    </div>
  );
}

export default App;
