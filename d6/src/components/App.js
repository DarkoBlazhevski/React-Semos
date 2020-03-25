import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Posts from "./Posts"
import Comments from "./Comments";
import Albums from "./Albums";
import Photos from "./Photos";
import Todos from "./Todos";
import Users from "./Users";

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
          <Route path="/posts" component={Posts} />
          <Route path="/comments" component={Comments} />
          <Route path="/albums" component={Albums} />
          <Route path="/photos" component={Photos} />
          <Route path="/todos" component={Todos} />
          <Route path="/users" component={Users} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;