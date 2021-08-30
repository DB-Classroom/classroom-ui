import Auth from "./auth";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Teacher from "./pages/teacher";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/signing" component={Auth} />
        <Route exact path="/" component={Home} />
        <Route exact path="/staff" component={Teacher} />
      </Switch>
    </Router>
  );
}
export default App;