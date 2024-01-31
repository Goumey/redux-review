export const GET_POSTS = "GET_POSTS";
export const getPost = () => {
  return (dispatch) => {
    fetch("http://localhost:3000/posts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        return dispatch({ type: GET_POSTS, playload: data });
      });
  };
};
