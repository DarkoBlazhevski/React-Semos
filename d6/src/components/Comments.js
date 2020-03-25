import React from "react";
import { API_URL } from "../constants";
import axios from "axios";

class Comments extends React.Component {

  state = {
    comments: [],
  }

  componentDidMount() {
    axios.get(`${API_URL}/comments`)
      .then(res => {
        this.setState({ comments: res.data });
      })
  }

  render() {
    return (
      <div>
        <h4>Welcome to Comments</h4>
        {
          this.state.comments.length > 0
            ?
            <ul>
              {this.state.comments.map(comments =>
                <li key={comments.id}>{comments.name}</li>)}
            </ul>
            :
            <h4>Loading...</h4>
        }
      </div>
    )
  }
}
export default Comments;