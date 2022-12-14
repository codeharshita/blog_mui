import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  Box,
  InputBase,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import { Badge } from "@mui/material";
import Pets from "@mui/icons-material/Pets";
import { Mail } from "@mui/icons-material";
import NotificationsIcon from "@mui/icons-material/Notifications";
//import { theme } from "./../theme";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0px 20px",
  borderRadius: theme.shape.borderRadius,
  width: "30%",
}));

const Icon = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolbar variant="h6">
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          COISTA{" "}
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <Icon>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://material-ui.com/static/images/avatar/3.jpg"
            onClick={(e) => setOpen(true)}
          />
        </Icon>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="/static/images/avatar/1.jpg"
          />
          <Typography variant="span">John</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
