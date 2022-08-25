import {
  Paper,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";

import { Box } from "@mui/system";
import React from "react";
import TemporaryDrawer from "./Drawer";
import ClippedDrawer from "./Drawer2";


function Customer() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };


  return (
    <Paper
      elevation={3}
      sx={{ p: 3 }}
      style={{ display: "flex", height: "100%" }}
    >


<Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <TemporaryDrawer />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ClippedDrawer />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
    </Paper>
  );
}

export default Customer;

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
