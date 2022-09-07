import * as React from "react";

import { Box, Stack } from "@mui/material";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link as RouterLink } from "react-router-dom";

export default function AppBreadcrumbs() {
  const links = [
    {
      text: "Home",
      icon: <HomeIcon sx={{ mr: 0.5 }} fontSize="medium" />,
    },
    { text: "Dashboard", to: "dashboard" },
    { text: "Customer", to: "customers" },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Breadcrumbs aria-label="breadcrumb" separator="›">
        <Stack
          direction="row"
          divider={<NavigateNextIcon fontSize="small" />}
          spacing={1}
        >
          <Link
            underline="none"
            sx={{ display: "flex", alignItems: "center" }}
            color="inherit"
          >
            <HomeIcon sx={{ mr: 0.5 }} fontSize="medium" />
            <RouterLink to="/">Home</RouterLink>
          </Link>

          {links.map(
            (link) =>
              link.to && (
                <Link
                  underline="none"
                  sx={{ display: "flex", alignItems: "center" }}
                  color="inherit"
                  href="/"
                >
                  <RouterLink to={link.to}>{link.text}</RouterLink>
                </Link>
              )
          )}
        </Stack>
      </Breadcrumbs>
    </Box>
  );
}
