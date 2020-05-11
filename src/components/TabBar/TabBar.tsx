import React, { useState } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
} from "@material-ui/core";
import { HomeRounded, FavoriteRounded } from "@material-ui/icons";

const HOME = "Home";
const FAVOURITE = "Favourite";

const useStyles = makeStyles({
  tabBar: {
    position: "fixed",
    bottom: 0,
    width: "100%",
  },
  tab: {
    maxWidth: "none",
  },
});

function TabBar() {
  const classes = useStyles();
  const [value, setValue] = useState(HOME);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.tabBar}
    >
      <BottomNavigationAction
        label={HOME}
        value={HOME}
        icon={<HomeRounded />}
        className={classes.tab}
      />
      <BottomNavigationAction
        label={FAVOURITE}
        value={FAVOURITE}
        icon={<FavoriteRounded />}
        className={classes.tab}
      />
    </BottomNavigation>
  );
}

export default TabBar;
