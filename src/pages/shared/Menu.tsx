import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link, NavLink, Navigate, Route } from "react-router-dom";

import AdminHome from "pages/admin/AdminHome";
import CircleIcon from "@mui/icons-material/Circle";
import Customer from "pages/user/Customer";
import GroupIcon from "@mui/icons-material/Group";
import Home from "pages/user/Home";
import HomeIcon from "@mui/icons-material/Home";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import PageNotFound from "./PageNotFound";
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
  },
  {
    key: "settings",
    path: "settings",
    element: <Settings />,
    text: "Settings",
    icon: <SettingsIcon />,
    divider: true,
  },
  {
    key: "admin",
    path: "admin",
    element: <Navigate to="admin" replace />,
    text: "Switch",
    icon: <SwapHorizIcon />,
    role: ["Admin", "User"],
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
  },
  {
    key: "customers",
    path: "customers",
    element: <Customer />,
    text: "Customers",
    icon: <GroupIcon />,
    role: ["Admin", "User"],
  },
  {
    key: "users",
    path: "users",
    element: <User />,
    text: "Users",
    icon: <GroupIcon />,
    divider: true,
    role: ["Admin", "User"],
  },

  {
    key: "user",
    path: "user",
    element: <Navigate to="/" replace />,
    text: "Switch",
    icon: <SwapHorizIcon />,
  },
];

export function Menu({ type }: { type: "user" | "admin" }) {
  const configuration: any =
    type === "user"
      ? DefaultRouteConfig
      : type === "admin"
      ? AdminRouteConfig
      : [];

  return (
    <>
      <List>
        {configuration
          .filter((x) => x.path !== "*")
          .map((x) => (
            <>
              <ListItem disablePadding>
                <NavLink
                  to={x.path}
                  className={({ isActive }) =>
                    isActive ? "activeClassName" : undefined
                  }
                  style={{ width: "100%" }}
                >
                  <ListItemButton>
                    <ListItemIcon>{x.icon}</ListItemIcon>
                    <ListItemText
                      primary={x.text}
                      style={{ textDecoration: "none !important" }}
                    />
                  </ListItemButton>
                </NavLink>
              </ListItem>
              {x.divider && <Divider />}
            </>
          ))}
      </List>
    </>
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
