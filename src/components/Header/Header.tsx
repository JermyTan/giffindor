import React from "react";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import AuthButton from "../AuthButton/AuthButton";

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

        <AuthButton />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
