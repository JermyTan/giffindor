import { SET_USER } from "../action-types";
import { Action, User } from "../actions";

const initialState: User | null = null;

function user(state = initialState, action: Action) {
  switch (action.type) {
    case SET_USER:
      return action.payload.user as User | null;
    default:
      return state;
  }
}

export default user;
