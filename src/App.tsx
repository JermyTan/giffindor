import React from "react";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import TabBar from "./components/TabBar/TabBar";
import UserProvider from "./context-providers/UserProvider";
import "./App.css";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Header />
        <Body />
        <TabBar />
      </UserProvider>
    </div>
  );
}

export default App;
