import React from 'react';
import { API_URL } from "../constants";
import axios from "axios";

class Photos extends React.Component {

  state = {
    photos: [],
  }

  componentDidMount() {
    axios.get(`${API_URL}/photos`)
      .then(res => {
        this.setState({ photos: res.data });
      })
  }

  render() {
    return (
      <div>
        <h4>Welcome to Photos</h4>
        {
          this.state.photos.length > 0
            ?
            <ul>
              {this.state.photos.map(photos => <li key={photos.id}>{photos.url}</li>)}
            </ul>
            :
            <h4>Loading...</h4>
        }

      </div>
    )
  }
}
export default Photos;