import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Education from "./pages/Education";


function AppRouter() {
  return (
    <>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path ="/education" component={Education} />
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default AppRouter;