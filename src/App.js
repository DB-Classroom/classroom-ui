import Auth from "./auth";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Teacher from "./pages/teacher";
import Subject from "./pages/subject";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/signing" component={Auth} />
        <Route exact path="/" component={Home} />
        <Route exact path="/staff" component={Teacher} />
        <Route exact path="/subject/:sub" component={Subject} />
      </Switch>
    </Router>
  );
}
export default App;