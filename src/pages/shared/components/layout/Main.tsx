import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import { Link } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Main({ menu, body }) {
  const drawerWidth = 250;
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
        <Box
          sx={{
            overflow: "auto",
            paddingTop: "64px",
            height: "100vh",
            background: "#e3e3e3",
          }}
        >
          {menu}
        </Box>
      </Drawer>
      <Box sx={{ width: "100%", paddingTop: "64px" }}>{body}</Box>
    </Box>
  );
}
