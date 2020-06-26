import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Project from "./components/Project";
import Education from "./components/Education";
import Contact from "./components/Contact.js";

class Main extends React.Component {
  render() {
    return (
      <div className="main" id="home">
        <Switch>
          <Route exact path="/">
            {" "}
            <Home />{" "}
          </Route>
          <Route exact path="/components/home">
            {" "}
            <Home />{" "}
          </Route>
          <Route exact path="/components/resume">
            {" "}
            <Resume />{" "}
          </Route>
          <Route exact path="/components/projects">
            {" "}
            <Project />{" "}
          </Route>
          <Route exact path="/components/education">
            {" "}
            <Education />{" "}
          </Route>
          <Route exact path="/components/contact">
            {" "}
            <Contact />{" "}
          </Route>
        </Switch>
      </div>
    );
  }
}

export default Main;
