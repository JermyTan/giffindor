import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  makeStyles,
} from "@material-ui/core";

type Props = {
  title: String;
};

const useStyles = makeStyles({
  title: {
    flexGrow: 1,
    textAlign: "center",
  },
});

function Header(props: Props) {
  const classes = useStyles();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h5" className={classes.title}>
          Trending
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
