import React from 'react';
import { Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import Header from "./Header"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Login from "./Login"

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    )
  }
}
export default App;