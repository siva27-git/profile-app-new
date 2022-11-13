import List from "@mui/material/List";

import { mainListItems, secondaryListItems } from "./listItems";

const Menu = () => {
  return (
    <List component="nav" sx={{ color: "grey", marginLeft: 3, marginTop: 1 }}>
      {mainListItems}
      {secondaryListItems}
    </List>
  );
};

export default Menu;
