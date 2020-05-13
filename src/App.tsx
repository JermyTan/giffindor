import React from "react";
import Header from "./components/header/Header";
import GifList from "./components/gif-list/GifList";
import TabBar from "./components/tab-bar/TabBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <GifList />
      <TabBar />
    </div>
  );
}

export default App;
