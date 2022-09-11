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

function MenuItem(props) {
  const [open, setOpen] = useState<boolean>(props.open);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon children={props.icon} />
        <ListItemText primary={<Box>{props.text}</Box>} />

        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List disablePadding>
          {props.items.map((x) => (
            <ListItemButton sx={{ pl: 4, py: "4px" }}>
              <ListItemIcon children={x.icon} />
              <ListItemText primary={x.text} />
            </ListItemButton>
          ))}
        </List>
        <Divider />
      </Collapse>
    </>
  );
}

export { MenuItem };
