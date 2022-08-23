import * as React from "react";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import GrainIcon from "@mui/icons-material/Grain";
import HomeIcon from "@mui/icons-material/Home";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import WhatshotIcon from "@mui/icons-material/Whatshot";

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
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
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

        {/* <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Core
        </Link> */}
        <Typography
          sx={{ display: "flex", alignItems: "center" }}
          color="text.primary"
        >
          <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Dissabled
        </Typography>
      </Breadcrumbs>
    </div>
  );
}
