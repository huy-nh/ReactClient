import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Input,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";

import Drawer from "pages/shared/components/layout/Drawer";
import MenuItem from "@mui/material/MenuItem";
import MessageManager from "features/messages/MessageManager";
import { PageHeader } from "pages/shared/components/Route/PageHeader";

export default function Settings() {
  const defaultSettings = {
    string: {
      key: "string",
      value: "value",
      type: "string",
      label: "String",
      fullWidth: true,
      onChange: (e) => {
        handleChange({ key: "string", value: e.target.value });
      },
    },
    number: {
      key: "number",
      value: 0,
      type: "number",
      label: "Number",
      fullWidth: true,
      InputLabelProps: {
        shrink: true,
      },
      onChange: (e) => {
        handleChange({ key: "number", value: e.target.value });
      },
    },
    select: {
      key: "select",
      select: true,
      value: 10,
      type: "select",
      label: "Select",
      fullWidth: true,
      children: [
        <MenuItem key={10} value={10}>
          10.
        </MenuItem>,
        <MenuItem key={20} value={20}>
          20.
        </MenuItem>,
        <MenuItem key={30} value={30}>
          30.
        </MenuItem>,
      ],
      onChange: (e) => {
        handleChange({ key: "select", value: e.target.value });
      },
    },
  };

  const [textFieldsProps, setTextFieldsProps] = useState({});
  const [textFieldsPropsCapture, setTextFieldsPropsCapture] = useState({});

  useEffect(() => {
    setTextFieldsProps(defaultSettings);
    setTextFieldsPropsCapture(defaultSettings);
  }, []);

  useEffect(() => {
    console.log("textFieldsProps", textFieldsProps);
  }, [textFieldsProps]);

  const handleChange = ({ key, value }) => {
    // console.log("setting", textFieldsProps);
    let set = textFieldsProps[key];
    // console.log("finxd set", set);
    let newset = { ...set, value: String(value) };
    // console.log("new set", newset);

    // console.log("merged", { ...textFieldsProps, [key]: newset });
    // MessageManager.show(`\{key: ${key}, value: ${value}\}`);
    setTextFieldsProps({ ...textFieldsProps, [key]: newset });
  };

  const dataChanged = Object.keys(textFieldsProps).filter(
    (x) => textFieldsProps[x].value != textFieldsPropsCapture[x].value
  );

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={4}
      >
        <PageHeader
          title="Settings"
          buttons={[
            {
              key: "btnSave",
              variant: "contained",
              disabled: !dataChanged.some((x) => x),
              onClick() {
                MessageManager.show("Save Changes");
              },
              // startIcon: <AddIcon />,
              children: "Save Changes",
            },
            {
              key: "btnCancel",
              variant: "outlined",
              disabled: !dataChanged.some((x) => x),
              onClick() {
                setTextFieldsProps(textFieldsPropsCapture);
              },
              // startIcon: <AddIcon />,
              children: "Cancel",
            },
          ]}
        />
        {Object.keys(textFieldsProps).map((textFieldProps) => (
          <TextField
            {...textFieldsProps[textFieldProps]}
            onChange={(e) => {
              handleChange({
                key: textFieldProps,
                value: e.target.value,
              });
            }}
          />
        ))}

        <FormControl fullWidth>
          <FormLabel>Pick two</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox name="gilad" />}
              label="Gilad Gray"
            />
            <FormControlLabel
              control={<Checkbox name="gilad" />}
              label="Jason Killian"
            />
            <FormControlLabel
              control={<Checkbox name="antoine" />}
              label="Antoine Llorca"
            />
          </FormGroup>
          {/* <FormHelperText>You can display an error</FormHelperText> */}
        </FormControl>

        <FormControl fullWidth>
          <FormLabel>Text</FormLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
          {/* <FormHelperText>You can display an error</FormHelperText> */}
        </FormControl>

        <FormControl fullWidth>
          <FormLabel>Text</FormLabel>
          <TextField variant="filled" />
        </FormControl>

        <Drawer />
      </Stack>
    </Paper>
  );
}
