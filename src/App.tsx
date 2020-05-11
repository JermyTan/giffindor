import React from "react";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import TabBar from "./components/TabBar/TabBar";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header title="Trending" />
      <Body />
      <TabBar />
    </div>
  );
}

export default App;
