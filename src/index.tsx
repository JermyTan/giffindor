import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "semantic-ui-css/semantic.min.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import UserProvider from "./context-providers/UserProvider";
import FavouritesProvider from "./context-providers/FavouritesProvider";
import AuthProvider from "./context-providers/AuthProvider";
import SearchProvider from "./context-providers/SearchProvider";

if (process.env.NODE_ENV === "production") {
  console.log = () => {};
}

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <FavouritesProvider>
        <AuthProvider>
          <SearchProvider>
            <App />
          </SearchProvider>
        </AuthProvider>
      </FavouritesProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
