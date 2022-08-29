import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link, NavLink, Navigate } from "react-router-dom";

import CircleIcon from "@mui/icons-material/Circle";
import Customer from "pages/user/Customer";
import Home from "pages/user/Home";
import Setting from "pages/admin/Setting";
import User from "pages/user/User";

export const DefaultRouteConfig = [
  {
    key: "index",
    index: true,
    path: "",
    element: <Home />,
    text: "Dashboard",
    icon: <CircleIcon color="primary" />,
  },
  {
    key: "customers",
    path: "customers",
    element: <Customer />,
    text: "Customers",
    icon: <CircleIcon color="primary" />,
  },
  {
    key: "users",
    path: "users",
    element: <User />,
    text: "Users",
    icon: <CircleIcon color="primary" />,
    divider: true,
  },
  {
    key: "*",
    path: "admin",
    element: <Navigate to="admin" replace />,
    text: "To Admin",
    icon: <CircleIcon color="error" />,
  },
  { path: "*", element: <Navigate to="" replace /> },
];

export const AdminRouteConfig = [
  {
    key: "index",
    index: true,
    path: "",
    element: <Home />,
    text: "Dashboard",
    icon: <CircleIcon color="error" />,
  },
  {
    key: "customers",
    path: "customers",
    element: <Customer />,
    text: "Customers",
    icon: <CircleIcon color="error" />,
  },
  {
    key: "users",
    path: "users",
    element: <User />,
    text: "Users",
    icon: <CircleIcon color="error" />,
    divider: true,
  },
  {
    key: "settings",
    path: "settings",
    element: <Setting />,
    text: "Settings",
    icon: <CircleIcon color="error" />,
    divider: true,
  },
  {
    key: "user",
    path: "/",
    element: <Navigate to="/" replace />,
    text: "To User",
    icon: <CircleIcon color="primary" />,
  },
  { key: "*", path: "*", element: <Navigate to="" replace /> },
];

export default function DefaultMenu({ configuration }) {
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
