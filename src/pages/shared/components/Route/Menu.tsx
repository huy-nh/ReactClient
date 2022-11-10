import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
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
import HomeIcon from "@mui/icons-material/Home";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import LanIcon from "@mui/icons-material/Lan";
import { MenuItem } from "pages/shared/components/route/MenuItem";
import PageHome from "pages/user/PageHome";
import Settings from "pages/admin/Settings";
import SettingsIcon from "@mui/icons-material/Settings";
import StarIcon from "@mui/icons-material/Star";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import SyncIcon from "@mui/icons-material/Sync";
import User from "pages/admin/User";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import { useEffect } from "react";

function CreateConfigItems(text, path, icon, element) {
  const Com = icon;
  return {
    text,
    path: path ?? text.toString().toLowerCase(),
    icon: icon,
    element: <Typography variant="body1">{text}</Typography>,
  };
}

const DefaultRouteConfig: any = [
  {
    key: "index",
    index: true,
    path: "",
    element: <PageHome />,
    text: "Home",
    icon: <HomeIcon />,
    divider: true,
    group: "top",
  },
  {
    ...CreateConfigItems("Quick Access", "quick-access", <StarIcon />, null),
    group: "top",
    items: [
      CreateConfigItems("Desktop", "desktop", <WebAssetIcon />, null),
      CreateConfigItems("Downloads", "downloads", <FileDownloadIcon />, null),
      CreateConfigItems("Documents", "documents", <ArticleIcon />, null),
      CreateConfigItems("Images", "images", <InsertPhotoIcon />, null),
    ],
  },
  {
    ...CreateConfigItems(
      "OneDrive - Personal",
      "onedrive-personal",
      <CloudIcon />,
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
    ...CreateConfigItems("Network", "network", <LanIcon />, null),
    group: "top",
  },
  {
    ...CreateConfigItems("Linux", "linux", <AutoAwesomeMotionIcon />, null),
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
      <List>
        {configuration.map((x) =>
          x.items && x.items.length > 0 ? (
            <MenuItem
              text={x.text}
              icon={x.icon}
              items={x.items}
              path={x.path}
              key={x.text}
            />
          ) : (
            <>
              <ListItem button disablePadding key={x.text}>
                <NavLink
                  to={x.path}
                  style={{
                    width: "100%",
                    textDecoration: "none",
                    color: "#000000de",
                  }}
                >
                  {({ isActive }) => (
                    <>
                      <ListItemButton
                        style={{
                          background: isActive ? "#cccccc" : "inherit",
                          borderRight: isActive
                            ? "solid 3px #1976d2"
                            : undefined,
                        }}
                      >
                        <ListItemIcon>{x.icon}</ListItemIcon>
                        <ListItemText>{x.text}</ListItemText>
                      </ListItemButton>
                    </>
                  )}
                </NavLink>
              </ListItem>
              {x.divider && <Divider key={x.text + "_d"} />}
            </>
          )
        )}
      </List>
    );
  };

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

const toRoute = (x: any) =>
  x.items ? x.items.map((x) => <Route {...x} />) : <Route {...x} />;

function Routing({ type }: { type: "user" | "admin" }) {
  switch (type) {
    case "admin":
      return AdminRouteConfig.map(toRoute);
    default:
      return DefaultRouteConfig.map(toRoute);
  }
}

export { Menu, Routing };
