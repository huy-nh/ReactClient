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
import AlbumIcon from "@mui/icons-material/Album";
import ArticleIcon from "@mui/icons-material/Article";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import CloudIcon from "@mui/icons-material/Cloud";
import Customer from "pages/admin/Customer";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import GroupIcon from "@mui/icons-material/Group";
import Home from "pages/user/Home";
import HomeIcon from "@mui/icons-material/Home";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import LanIcon from "@mui/icons-material/Lan";
import { MenuItem } from "./MenuItem";
import Settings from "pages/admin/Settings";
import SettingsIcon from "@mui/icons-material/Settings";
import StarIcon from "@mui/icons-material/Star";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import SyncIcon from "@mui/icons-material/Sync";
import User from "pages/admin/User";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import { useEffect } from "react";

function CreateConfigItems(text, path, icon, element) {
  return {
    text,
    path: path ?? text.toString().toLowerCase(),
    icon,
    element,
  };
}

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
    icon: <StarIcon color="warning" />,
    group: "top",
    items: [
      CreateConfigItems("Desktop", "Desktop", <WebAssetIcon />, null),
      CreateConfigItems("Downloads", "Downloads", <FileDownloadIcon />, null),
      CreateConfigItems("Documents", "Documents", <ArticleIcon />, null),
      CreateConfigItems("images", "Images", <InsertPhotoIcon />, null),
    ],
  },
  {
    ...CreateConfigItems(
      "OneDrive - Personal",
      "onedrive-personal",
      <CloudIcon color="primary" />,
      null
    ),
    group: "top",
  },
  {
    ...CreateConfigItems("This Pc", "this-pc", <DesktopWindowsIcon />, null),
    group: "top",
    items: [
      CreateConfigItems("Local Disk(C:)", "local-disk-c", <AlbumIcon />, null),
      CreateConfigItems("Data (D:)", "data-d", <AlbumIcon />, null),
      CreateConfigItems("Data (E:)", "data-e", <AlbumIcon />, null),
    ],
  },
  {
    key: "network",
    path: "network",
    element: "Network",
    text: "Network",
    icon: <LanIcon />,
    group: "top",
  },
  {
    key: "linux",
    path: "linux",
    element: "Linux",
    text: "Linux",
    icon: <AutoAwesomeMotionIcon />,
    group: "top",
  },
  {
    key: "admin",
    path: "admin",
    element: <Navigate to="admin" replace />,
    text: "Switch",
    icon: <SyncIcon />,
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

function Menu({ type }: { type: "user" | "admin" }) {
  const configuration: any =
    type === "user"
      ? DefaultRouteConfig
      : type === "admin"
      ? AdminRouteConfig
      : [];

  const RenderMenu = (configuration) => {
    return (
      <>
        <List>
          {configuration.map((x) =>
            x.items && x.items.length > 0 ? (
              <NavLink to={x.path}>
                {({ isActive }) => (
                  <MenuItem
                    text={x.text}
                    icon={x.icon}
                    items={x.items}
                    path={x.path}
                    open={isActive}
                  />
                )}
              </NavLink>
            ) : (
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
            )
          )}
        </List>
      </>
    );
  };
  console.log("render Menu Component");
  useEffect(() => {
    console.log("render Menu Component");
  }, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Box sx={{ flexGrow: 1 }}>
        {RenderMenu(
          configuration
            .filter((x) => !x.index)
            .filter((x) => x.path !== "*")
            .filter((x) => x.group === "top")
        )}
      </Box>
      <Box>
        {RenderMenu(
          configuration
            .filter((x) => !x.index)
            .filter((x) => x.path !== "*")
            .filter((x) => x.group === "bottom")
        )}
      </Box>
    </Box>
  );
}

const toRoute = (x: any) => <Route {...x}>{x.items && toRoute(x.items)}</Route>;

function Routing({ type }: { type: "user" | "admin" }) {
  switch (type) {
    case "admin":
      return AdminRouteConfig.map(toRoute);
    default:
      return DefaultRouteConfig.map(toRoute);
  }
}

export { Menu, Routing };
