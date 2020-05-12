import React from "react";
import Header from "./components/header/Header";
import GifList from "./components/gif-list/GifList";
import TabBar from "./components/tab-bar/TabBar";
import UserProvider from "./context-providers/UserProvider";
import "./App.css";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Header />
        <GifList />
        {
          //<TabBar />
        }
      </UserProvider>
    </div>
  );
}

export default App;
