import {
  Collapse,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";

function MenuItem(props) {
  const [open, setOpen] = useState<boolean>(false);
  const [matchChildren, setMatchChildren] = useState<boolean>(false);

  useEffect(() => {
    const matchItem = props?.items.some((x) => {
      return location.pathname.includes(x.path);
    });
    setOpen(matchItem);
  }, []);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton
        onClick={handleClick}
        style={{
          background: matchChildren ? "#c1c1c1" : "inherit",
          borderRight: matchChildren ? "solid 3px #1976d2" : undefined,
        }}
      >
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
                <ListItemButton
                  sx={{ pl: 4, py: "6px" }}
                  style={{
                    background: isActive ? "#cccccc" : "inherit",
                    borderRight: isActive ? "solid 3px #1976d2" : undefined,
                  }}
                  selected={isActive}
                >
                  <ListItemIcon color="primary" children={x.icon} />
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
