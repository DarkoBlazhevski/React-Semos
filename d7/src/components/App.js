import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Posts from "./Posts"

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Header />
          <Route path="/" component={Posts} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;