import { SET_SEARCH_TERM } from "../action-types";
import { Action } from "../actions";

const initialState = "";

function searchTerm(state = initialState, action: Action) {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return action.payload.searchTerm as string;
    default:
      return state;
  }
}

export default searchTerm;
