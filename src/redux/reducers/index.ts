import { combineReducers } from "redux";
import searchTerm from "./searchTerm";
import user from "./user";
import favourites from "./favourites";

export default combineReducers({ searchTerm, user, favourites });
