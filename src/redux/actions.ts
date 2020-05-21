import { SET_SEARCH_TERM, SET_USER, TOGGLE_FAVOURITES } from "./action-types";

export type Action = {
  type: string;
  payload: any;
};

export type User = {
  uid: string;
  displayName: string;
};

export function setSearchTerm(searchTerm: string): Action {
  return {
    type: SET_SEARCH_TERM,
    payload: { searchTerm },
  };
}

export function setUser(user: User | null) {
  return {
    type: SET_USER,
    payload: { user },
  };
}

export function toggleFavourites(showFavourites: boolean) {
  return {
    type: TOGGLE_FAVOURITES,
    payload: { showFavourites },
  };
}
