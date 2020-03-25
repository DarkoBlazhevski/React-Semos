import React from "react";
import { API_URL } from "../constants";
import axios from "axios";

class Posts extends React.Component {

  state = {
    posts: [],
    showLoader: false,
    error: ""
  }

  componentDidMount() {
    axios.get(`${API_URL}/postdjhgjs`)
      .then(res => {
        if (res.status === 200) {
          this.setState({
            posts: res.data,
            showLoader: false,
            error: ""
          })
        }
      })
      .catch(err => this.setState({
        error: "Error Fetching Posts :(",
        showloader: false
      }))
  }

  render() {
    return (
      <div className="posts">
        <h4>Welcome to Posts</h4>
        {
          this.state.posts.length > 0
            ?
            this.state.posts.map(posts =>
              <ul>
                <li key={posts.id}>{posts.title}</li>
              </ul>)
            :
            <h4>Loading ...</h4>
        }
        <hr />
        {
          this.state.showLoader
            ?
            <h4>Loading...</h4>
            :
            this.state.error === ""
              ?
              this.state.posts.map(posts => <li key={posts.id}>{posts.title}</li>)
              :
              <h5>{this.state.error} </h5>
        }



      </div>
    )
  }
}
export default Posts;