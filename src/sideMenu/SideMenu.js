import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

const SideMenu = () => {
  const [toggleMenu, setToggleMenu] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setToggleMenu({ ...toggleMenu, [anchor]: open });
  };

  const resetHandler = () => {
    console.log("Reset");
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Reset All"].map((text, index) => (
          <ListItem button key={text} onClick={resetHandler}>
            <ListItemIcon>
              <RestartAltIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <div className="menu-button">
            <Fab
              color="primary"
              onClick={toggleDrawer(anchor, true)}
              aria-label="add"
            >
              <MenuIcon />
            </Fab>
          </div>
          <Drawer
            anchor={anchor}
            open={toggleMenu[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default SideMenu;
