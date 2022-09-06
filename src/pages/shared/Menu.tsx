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
import { NavLink, Navigate, Route } from "react-router-dom";

import AdminHome from "pages/admin/AdminHome";
import Customer from "pages/user/Customer";
import GroupIcon from "@mui/icons-material/Group";
import Home from "pages/user/Home";
import HomeIcon from "@mui/icons-material/Home";
import NestedList from "./NestedMenu";
import Settings from "pages/user/Settings";
import SettingsIcon from "@mui/icons-material/Settings";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import User from "pages/user/User";

const DefaultRouteConfig: any = [
  {
    key: "index",
    index: true,
    path: "",
    element: <Home />,
    text: "Home",
    icon: <HomeIcon />,
    divider: true,
    role: ["Admin", "User"],
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
    key: "admin",
    path: "admin",
    element: <Navigate to="admin" replace />,
    text: "Switch",
    icon: <SwapHorizIcon />,
    role: ["Admin", "User"],
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
    role: ["Admin", "User"],
    group: "top",
  },
  {
    key: "customers",
    path: "customers",
    element: <Customer />,
    text: "Customers",
    icon: <GroupIcon />,
    role: ["Admin", "User"],
    group: "top",
  },
  {
    key: "users",
    path: "users",
    element: <User />,
    text: "Users",
    icon: <GroupIcon />,
    divider: true,
    role: ["Admin", "User"],
    group: "top",
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
                  // style={({ isActive }) =>
                  //   isActive
                  //     ? {
                  //         width: "100%",
                  //         textDecoration: "none",
                  //         color: "blue",
                  //         fontWeight: 900,
                  //       }
                  //     : {
                  //         width: "100%",
                  //         textDecoration: "none",
                  //         color: "inherit",
                  //       }
                  // }
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
            .filter((x) => x.group === "top")
        )}
        <NestedList />
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

const toRoute = (x) => <Route {...x} />;

export function Routing({ type }: { type: "user" | "admin" }) {
  switch (type) {
    case "admin":
      return AdminRouteConfig.map(toRoute);
    default:
      return DefaultRouteConfig.map(toRoute);
  }
}
