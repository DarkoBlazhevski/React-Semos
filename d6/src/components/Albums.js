import React from 'react';
import { API_URL } from "../constants";
import axios from "axios";

class Albums extends React.Component {

  state = {
    albums: [],
  }

  componentDidMount() {
    axios.get(`${API_URL}/albums`)
      .then(res => {
        this.setState({ albums: res.data });
      })
  }

  render() {
    return (
      <div className="center">
        <h4>Welcome to Albums</h4>
        {
          this.state.albums.length > 0
            ?
            <ul>
              {this.state.albums.map(albums =>
                <li key={albums.id}>{albums.id}</li>)
              }
            </ul>
            :
            <h4>Loading...</h4>
        }
      </div>
    )
  }
}
export default Albums;