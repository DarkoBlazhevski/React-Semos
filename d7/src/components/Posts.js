import React from "react";
import { connect } from "react-redux";

class Posts extends React.Component {
  render() {
    console.log(this.props)
  
    return (
      <div className="posts">
        <h4>Welcome to Posts</h4>
        {
          this.props.posts.length > 0
            ?
            this.props.posts.map(posts =>
              <ul>
                <li key={posts.id}>{posts.title}</li>
                <p>{posts.body} </p>
              </ul>)
            :
            <h4>Loading ...</h4>
        }
        {
          this.props.showLoader
            ?
            <h4>Loading...</h4>
            :
            this.props.error === ""
              ?
              this.props.posts.map(posts => <li key={posts.id}>{posts.title}</li>)
              :
              <h5>{this.props.error} </h5>
        }
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return{
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Posts);