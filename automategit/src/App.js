import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "react-tree-graph/dist/style.css";
import "./App.css";
import data from "./data";

// pages
import home from "./pages/home/home";

//components
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
