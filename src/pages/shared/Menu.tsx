import {
  Box,
  Divider,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { NavLink, Navigate, Route, Routes } from "react-router-dom";

import AdminHome from "pages/admin/AdminHome";
import Customer from "pages/admin/Customer";
import GroupIcon from "@mui/icons-material/Group";
import Home from "pages/user/Home";
import HomeIcon from "@mui/icons-material/Home";
import NestedList from "./NestedMenu";
import Settings from "pages/admin/Settings";
import SettingsIcon from "@mui/icons-material/Settings";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import User from "pages/admin/User";

const DefaultRouteConfig: any = [
  {
    key: "index",
    index: true,
    path: "",
    element: <Home />,
    text: "Home",
    icon: <HomeIcon />,
    divider: true,
    group: "top",
  },
  {
    key: "quick-access",
    path: "quick-access",
    element: "Quick Access",
    text: "Quick Access",
    icon: <HomeIcon />,
    group: "top",
    items: [
      {
        key: "desktop",
        path: "desktop",
        element: "Desktop",
        text: "Desktop",
        icon: <HomeIcon />,
        group: "top",
      },
    ],
  },
  {
    key: "onedrive-personal",
    path: "onedrive-personal",
    element: "OneDrive - Personal",
    text: "OneDrive - Personal",
    icon: <HomeIcon />,
    group: "top",
  },
  {
    key: "this-pc",
    path: "this-pc",
    element: "This Pc",
    text: "This Pc",
    icon: <HomeIcon />,
    group: "top",
  },
  {
    key: "network",
    path: "network",
    element: "Network",
    text: "Network",
    icon: <HomeIcon />,
    group: "top",
  },
  {
    key: "linux",
    path: "linux",
    element: "Linux",
    text: "Linux",
    icon: <HomeIcon />,
    group: "top",
  },
  {
    key: "admin",
    path: "admin",
    element: <Navigate to="admin" replace />,
    text: "Switch",
    icon: <SwapHorizIcon />,
    group: "bottom",
  },
];

const AdminRouteConfig = [
  {
    key: "index",
    index: true,
    path: "",
    element: <AdminHome />,
    text: "Home",
    icon: <HomeIcon />,
    divider: true,
    group: "top",
  },
  {
    key: "customers",
    path: "customers",
    element: <Customer />,
    text: "Customers",
    icon: <GroupIcon />,
    group: "top",
  },
  {
    key: "users",
    path: "users",
    element: <User />,
    text: "Users",
    icon: <GroupIcon />,
    divider: true,
    group: "top",
  },
  {
    key: "settings",
    path: "settings",
    element: <Settings />,
    text: "Settings",
    icon: <SettingsIcon />,
    divider: false,
    group: "bottom",
  },
  {
    key: "user",
    path: "user",
    element: <Navigate to="/" replace />,
    text: "Switch",
    icon: <SwapHorizIcon />,
    group: "bottom",
  },
];

export function Menu({ type }: { type: "user" | "admin" }) {
  const configuration: any =
    type === "user"
      ? DefaultRouteConfig
      : type === "admin"
      ? AdminRouteConfig
      : [];

  const RenderList = (configuration) => {
    return (
      <>
        <List>
          {configuration.map((x) => (
            <>
              <ListItem button disablePadding>
                <NavLink
                  to={x.path}
                  style={{
                    width: "100%",
                    textDecoration: "none",
                  }}
                >
                  {({ isActive }) => (
                    <ListItemButton selected={isActive}>
                      <ListItemIcon>{x.icon}</ListItemIcon>
                      <ListItemText>{x.text}</ListItemText>
                    </ListItemButton>
                  )}
                </NavLink>
              </ListItem>
              {x.divider && <Divider />}
            </>
          ))}
        </List>
      </>
    );
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Box sx={{ flexGrow: 1 }}>
        {RenderList(
          configuration
            .filter((x) => x.path !== "*")
            .filter((x) => !x.index)
            .filter((x) => x.group === "top")
        )}
        {/* <NestedList /> */}
      </Box>
      <Box>
        {RenderList(
          configuration
            .filter((x) => x.path !== "*")
            .filter((x) => x.group === "bottom")
        )}
      </Box>
    </Box>
  );
}

const toRoute = (x) => <Route {...x}>{x.items && toRoute(x.items)}</Route>;

export function Routing({ type }: { type: "user" | "admin" }) {
  switch (type) {
    case "admin":
      return AdminRouteConfig.map(toRoute);
    default:
      return DefaultRouteConfig.map(toRoute);
  }
}
