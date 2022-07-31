import React from "react"; //rafce
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Home, Pages } from "@mui/icons-material";

const Leftbar = () => {
  return (
    <Box
      flex="1"
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >

  <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Home/>
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#pages ">
              <ListItemIcon>
                <Pages/>
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          </List>
    </Box>
  );
};

export default Leftbar;
