import { TOGGLE_FAVOURITES } from "../action-types";
import { Action } from "../actions";

const initialState = { showFavourites: false };

function favourites(state = initialState, action: Action) {
  switch (action.type) {
    case TOGGLE_FAVOURITES:
      return {
        ...state,
        showFavourites: action.payload.showFavourites as boolean,
      };
    default:
      return state;
  }
}

export default favourites;
