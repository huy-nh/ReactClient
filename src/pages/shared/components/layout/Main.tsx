import * as React from "react";

import { Link, Outlet, Route, Routes } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Menu } from "../route/Menu";

export default function Main({ menu, body }) {
  const drawerWidth = 300;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#d3d3d3",
              letterSpacing: 3,
            }}
            children={
              <Typography
                variant="h4"
                style={{ letterSpacing: 18 }}
                children="Casino"
              />
            }
          />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto", height: "100vh" }}>{menu}</Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {body}
      </Box>
    </Box>
  );
}
