import {
  Box,
  Collapse,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";

import { useState } from "react";
import { NavLink } from "react-router-dom";

function MenuItem(props) {
  const [open, setOpen] = useState<boolean>(props.open);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon children={props.icon} />
        <ListItemText primary={props.text} />

        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List disablePadding>
          {props.items.map((x) => (
            <NavLink
              to={x.path}
              style={{
                width: "100%",
                textDecoration: "none",
                color: "#000000de",
              }}
            >
              {({ isActive }) => (
                <ListItemButton sx={{ pl: 4, py: "4px" }} selected={isActive}>
                  <ListItemIcon children={x.icon} />
                  <ListItemText primary={x.text} />
                </ListItemButton>
              )}
            </NavLink>
          ))}
        </List>
        <Divider />
      </Collapse>
    </>
  );
}

export { MenuItem };
