const initState = {
  posts: [
    {id: 1, title: "Post title 1", body: "Post body 1"},
    {id: 2, title: "Post title 2", body: "Post body 2"},
    {id: 3, title: "Post title 3", body: "Post body 3"}
  ]
}

const rootReducer = (state = initState, action) => {
  return state;
}

export default rootReducer;