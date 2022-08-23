import * as React from "react";

import AdbIcon from "@mui/icons-material/Adb";
import AppBar from "@mui/material/AppBar";
import { AuthContext } from "providers/AuthContext";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Divider } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import DialogManager from "pages/container/DialogManager";
import { ConfirmDialog } from "pages/container/ConfirmDialog";

const MenuBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const authContext = React.useContext(AuthContext);

  const menus = [
    { text: "Products", onClick: () => {} },
    { text: "Customers", onClick: () => {} },
    { text: "Pricing", onClick: () => {} },
    { text: "Blog", onClick: () => {} },
  ];

  const settingLogout = () => {
    var result = DialogManager.show(ConfirmDialog, {
      title: "Do you want to exit the application?",
      content: "Do you want to exit the application?",
    }).then(x =>{
      if(x){
        authContext.onSignOut();
      }
    });
  }

  const settings = [
    { text: "Profile", onClick: handleCloseUserMenu },
    { text: "Account", onClick: handleCloseUserMenu },
    {
      text: "Dashboard",
      onClick: handleCloseUserMenu,
      devider: true,
    },
    {
      text: "Setting",
      onClick: handleCloseUserMenu,
    },
    {
      text: "Logout",
      onClick: settingLogout,
    },
  ];

  const renderScreenXS = () => {
    return (
      <>
        <Box sx={{ display: { xs: "flex", md: "none" }, flexGrow: 1 }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {menus.map((menu) => (
              <MenuItem key={menu.text} onClick={menu.onClick}>
                <Typography textAlign="center">{menu.text}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
        <Typography
          variant="h5"
          noWrap
          component="a"
          href=""
          sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          LOGO
        </Typography>
      </>
    );
  };

  const renderScreenMD = () => {
    return (
      <>
        <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
        <Typography
          variant="h6"
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Casino
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          {menus.map((menu) => (
            <Button
              key={menu.text}
              onClick={menu.onClick}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {menu.text}
            </Button>
          ))}
        </Box>
      </>
    );
  };

  const renderScreen = () => {
    return (
      <>
        <AdbIcon sx={{ display: "flex", mr: 1 }} />
        <Typography
          variant="h6"
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: "flex",
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Casino
        </Typography>
        <Box sx={{ flexGrow: 1, display: "flex" }}>
          {menus.map((menu) => (
            <Button
              key={menu.text}
              onClick={menu.onClick}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {menu.text}
            </Button>
          ))}
        </Box>
      </>
    );
  };

  return (
    <AppBar position="static">
      <Container fixed>
        <Toolbar disableGutters>
          {/* {renderScreenXS()} */}
          {/* {renderScreenMD()} */}
          {renderScreen()}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="H" src="/images/avatar.png" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <>
                  <MenuItem key={setting.text} onClick={setting.onClick}>
                    <Typography textAlign="center">{setting.text}</Typography>
                  </MenuItem>
                  {setting.devider && <Divider orientation="horizontal" />}
                </>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default MenuBar;
