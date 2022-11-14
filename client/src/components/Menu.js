import List from "@mui/material/List";
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';

import { mainListItems, secondaryListItems } from "./listItems";

const Menu = () => {

  const drawerWidth = 240;

  const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      '& .MuiDrawer-paper': {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: 'border-box',
        ...(!open && {
          overflowX: 'hidden',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          width: theme.spacing(7),
          [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
          },
        }),
      },
    }),
  );
  return (
    <Drawer variant="permanent" open={true}>
      <List component="nav" sx={{ color: "grey", marginLeft: 3, marginTop: 1 }}>
        {mainListItems}
        {secondaryListItems}
      </List>
    </Drawer>
  );
};

export default Menu;
