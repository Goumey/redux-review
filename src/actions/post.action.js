const GET_POST = "GET_POST";
export const getPost = () => {
  return (dispatch) => {
    fetch("http://localhost:3000/posts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  };
};
