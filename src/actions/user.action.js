export const GET_USERS = "GET_USERS";
export const getUser = () => {
  return (dispatch) =>
    fetch("http://localhost:3000/user")
      .then((res) => res.json())
      .then((data) => dispatch({ type: GET_USERS, playload: data }));
};
