import React from 'react';
import { API_URL } from "../constants";
import axios from "axios";

class Todos extends React.Component {

  state = {
    todos: [],
  }

  componentDidMount() {
    axios.get(`${API_URL}/todos`)
      .then(res => {
        this.setState({ todos: res.data });
      })
  }

  render() {
    return (
      <div>
        <h4>Welcome to Todos</h4>
        {
          this.state.todos.length > 0
            ?
            <ul>
              {this.state.todos.map(todos => <li key={todos.id}>{todos.title}</li>)}
            </ul>
            :
            <h4>Loading...</h4>
        }

      </div>
    )
  }
}
export default Todos;