export const GET_POSTS = "GET_POSTS";
export const ADD_POST = "ADD_POST";
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

export const addPost = (data) => {
  return (dispatch) => {
    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Ajoutez d'autres en-têtes si nécessaire
      },
      body: JSON.stringify(data),
    }).then((res) => {
      dispatch({ type: ADD_POST, playload: data });
    });
  };
};
