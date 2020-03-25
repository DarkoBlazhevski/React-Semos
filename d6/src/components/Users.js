import React from 'react';
import { API_URL } from "../constants";
import axios from "axios";

class Users extends React.Component {

  state = {
    users: [],
  }

  componentDidMount() {
    axios.get(`${API_URL}/users`)
      .then(res => {
        this.setState({ users: res.data });
      })
  }

  render() {
    return (
      <div>
        <h4>Welcome to Users</h4>
        {
          this.state.users.length > 0
            ?
            <ul>
              {this.state.users.map(users => <li key={users.id}>{users.name}</li>)}
            </ul>
            :
            <h4>Loading...</h4>
        }

      </div>
    )
  }
}
export default Users;