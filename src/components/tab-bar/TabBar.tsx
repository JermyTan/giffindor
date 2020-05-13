import React, { useState, useContext } from "react";
import { Menu, Icon, Transition } from "semantic-ui-react";
import { UserContext } from "../../context-providers/UserProvider";
import "./TabBar.scss";

const HOME = "Home";
const FAVOURITE = "Favourite";

function TabBar() {
  const [value, setValue] = useState(HOME);
  const { user } = useContext(UserContext);

  const onTabClick = (event: any, data: any) => {
    setValue(data.name);
  };

  return (
    <Transition visible={user === null} unmountOnHide animation="fly up">
      <Menu
        color="yellow"
        className="bottom-tab-bar"
        icon="labeled"
        fluid
        widths="2"
      >
        <Menu.Item
          className="bottom-tab"
          name={HOME}
          active={value === HOME}
          onClick={onTabClick}
        >
          <Icon name="home" />
          {HOME}
        </Menu.Item>
        <Menu.Item
          className="bottom-tab"
          name={FAVOURITE}
          active={value === FAVOURITE}
          onClick={onTabClick}
        >
          <Icon name="star" />
          {FAVOURITE}
        </Menu.Item>
      </Menu>
    </Transition>
  );
}

export default TabBar;
