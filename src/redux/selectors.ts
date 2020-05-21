import reduxStore from "./store";

const shape = reduxStore.getState();
type StoreType = typeof shape;

export function getSearchTerm(store: StoreType) {
  return store.searchTerm;
}

export function getUser(store: StoreType) {
  return store.user;
}

export function getShowFavourites(store: StoreType) {
  return store.favourites.showFavourites;
}
