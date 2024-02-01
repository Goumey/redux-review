import { GET_USERS } from "../actions/user.action";

const initialState = [];
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return action.playload;

    default:
      return state;
  }
}
