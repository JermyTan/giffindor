import React from "react";
import { Menu, Icon, Transition } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { getUser, getShowFavourites } from "../../redux/selectors";
import { toggleFavourites } from "../../redux/actions";
import "./TabBar.scss";

function TabBar() {
  const user = useSelector(getUser);
  const showFavourites = useSelector(getShowFavourites);
  const dispatch = useDispatch();

  const onTabClick = (event: any, data: any) => {
    dispatch(toggleFavourites(data.name === "true"));
  };

  return (
    <Transition visible={user !== null} unmountOnHide animation="fly up">
      <Menu
        color="yellow"
        className="bottom-tab-bar"
        icon="labeled"
        fluid
        widths="2"
      >
        <Menu.Item
          className="bottom-tab"
          name="false"
          active={!showFavourites}
          onClick={onTabClick}
        >
          <Icon name="home" />
          Home
        </Menu.Item>
        <Menu.Item
          className="bottom-tab"
          name="true"
          active={showFavourites}
          onClick={onTabClick}
        >
          <Icon name="star" />
          Favourites
        </Menu.Item>
      </Menu>
    </Transition>
  );
}

export default TabBar;
