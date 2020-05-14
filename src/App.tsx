import React from "react";
import AppBar from "./components/app-bar/AppBar";
import Body from "./components/body/Body";
import TabBar from "./components/tab-bar/TabBar";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <AppBar />
      <Body />
      <TabBar />
    </div>
  );
}

export default App;
