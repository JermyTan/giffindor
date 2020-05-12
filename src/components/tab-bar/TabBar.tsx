import React, { useState } from "react";
import { Menu } from "semantic-ui-react";

const HOME = "Home";
const FAVOURITE = "Favourite";

function TabBar() {
  const [value, setValue] = useState(HOME);

  return (
    <Menu
      inverted
      color="green"
      borderless
      style={{
        flexShrink: 0, //don't allow flexbox to shrink it
        borderRadius: 0, //clear semantic-ui style
        margin: 0, //clear semantic-ui style
      }}
    >
      <Menu.Item header>Fixed Footer</Menu.Item>
    </Menu>
  );
}

export default TabBar;
