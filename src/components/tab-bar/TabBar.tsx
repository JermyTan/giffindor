import React, { useContext } from "react";
import { Menu, Icon, Transition } from "semantic-ui-react";
import { UserContext } from "../../context-providers/UserProvider";
import { FavouritesContext } from "../../context-providers/FavouritesProvider";
import "./TabBar.scss";

const HOME = "Home";
const FAVOURITE = "Favourite";

function TabBar() {
  const { user } = useContext(UserContext);
  const { showFavourites, setShowFavourites } = useContext(FavouritesContext);

  const onTabClick = (event: any, data: any) => {
    setShowFavourites(data.name === "true");
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
          {HOME}
        </Menu.Item>
        <Menu.Item
          className="bottom-tab"
          name="true"
          active={showFavourites}
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
