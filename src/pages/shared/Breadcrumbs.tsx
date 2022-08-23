import * as React from "react";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import GrainIcon from "@mui/icons-material/Grain";
import HomeIcon from "@mui/icons-material/Home";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { Box, Divider, Stack } from "@mui/material";

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function AppBreadcrumbs() {
  const links = [
    {
      text: "Home",
      icon: <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      onClick: () => {},
    },
    { text: "Dashboard", onClick: () => {} },
    { text: "Mui", onClick: () => {} },
    { text: "Breadcrumbs", onClick: () => {} },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <div role="presentation" onClick={handleClick}>
        <Breadcrumbs aria-label="breadcrumb">
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={1}
          >
            {links.map((link) => (
              <Link
                underline="none"
                sx={{ display: "flex", alignItems: "center" }}
                color="inherit"
                href="/"
              >
                {link.text}
              </Link>
            ))}
            <Typography
              sx={{ display: "flex", alignItems: "center" }}
              color="text.primary"
            >
              Dissabled
            </Typography>
          </Stack>
        </Breadcrumbs>
      </div>
    </Box>
  );
}
