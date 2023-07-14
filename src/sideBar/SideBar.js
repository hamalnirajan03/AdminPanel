import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";

import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";

import Person4OutlinedIcon from "@mui/icons-material/Person4Outlined";
import StoreIcon from "@mui/icons-material/Store";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import { Link } from "react-router-dom";

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              marginTop: 8,
              paddingBottom: 10,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Divider />

          <List>
            <Link to="/dashboard" style={{ textDecoration: "none" }}>
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <DashboardCustomizeOutlinedIcon />
                  </ListItemIcon>
                  Dashboard
                  <ListItemText />
                </ListItemButton>
              </ListItem>
            </Link>
          </List>

          <Divider />
          <Typography
            sx={{
              fontSize: 18,
              paddingLeft: 2,
            }}
          >
            Users
          </Typography>
          <List>
            <Link to="/addUser" style={{ textDecoration: "none" }}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <Person4OutlinedIcon />
                  </ListItemIcon>
                  Add Users
                  <ListItemText />
                </ListItemButton>
              </ListItem>
            </Link>

            <Link to="/viewUsers" style={{ textDecoration: "none" }}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <StoreIcon />
                  </ListItemIcon>
                  View Users
                  <ListItemText />
                </ListItemButton>
              </ListItem>
            </Link>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CreditCardIcon />
                </ListItemIcon>
                Orders
                <ListItemText />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LocalShippingIcon />
                </ListItemIcon>
                Delivery
                <ListItemText />
              </ListItemButton>
            </ListItem>
          </List>

          <Divider />
          <Typography
            sx={{
              fontSize: 18,
              paddingLeft: 2,
            }}
          >
            Products
          </Typography>
          <List>
            <Link to="/addProducts" style={{ textDecoration: "none" }}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <QueryStatsIcon />
                  </ListItemIcon>
                  Add Products
                  <ListItemText />
                </ListItemButton>
              </ListItem>
            </Link>

            <Link to="/viewProducts" style={{ textDecoration: "none" }}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <NotificationsIcon />
                  </ListItemIcon>
                  View Products
                  <ListItemText />
                </ListItemButton>
              </ListItem>
            </Link>
          </List>

          <Divider />
          <Typography
            sx={{
              fontSize: 18,
              paddingLeft: 2,
            }}
          >
            Services
          </Typography>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SettingsSystemDaydreamIcon />
                </ListItemIcon>
                System Health
                <ListItemText />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <StoreIcon />
                </ListItemIcon>
                Logs
                <ListItemText />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                Setting
                <ListItemText />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
      </Box>
    </>
  );
}
