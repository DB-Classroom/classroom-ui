import Auth from "./auth";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/signing" component={Auth} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}
export default App;