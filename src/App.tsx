import React from "react";
import AppBar from "./components/app-bar/AppBar";
import GifList from "./components/body/gif-list/GifList";
import TabBar from "./components/tab-bar/TabBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AppBar />
      <GifList />
      <TabBar />
    </div>
  );
}

export default App;
