import { ADD_POST, GET_POSTS } from "../actions/post.action";
const initialState = [];
export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return action.playload;
    case ADD_POST:
      return [action.playload, ...state];

    default:
      return state;
  }
}
