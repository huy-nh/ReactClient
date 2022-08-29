import {
  Box,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import MessageManager from "features/messages/MessageManager";
import { PageHeader } from "pages/shared/PageHeader";

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
    string2: {
      key: "string2",
      value: "",
      type: "string",
      label: "String",
      fullWidth: true,
      onChange: (e) => {
        handleChange({ key: "string", value: e.target.value });
      },
    },
    number2: {
      key: "number2",
      value: 0,
      type: "number",
      label: "Number2",
      fullWidth: true,
      InputLabelProps: {
        shrink: true,
      },
      onChange: (e) => {
        handleChange({ key: "number", value: e.target.value });
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
          title="Users"
          buttons={[
            {
              key: "btnSave",
              variant: "contained",
              disabled: !dataChanged.some((x) => x),
              onClick() {
                MessageManager.show("button clicked");
              },
              // startIcon: <AddIcon />,
              children:
                dataChanged.length > 0
                  ? `Save Changes (${dataChanged.length})`
                  : "Save Changes",
            },
            {
              key: "btnCancel",
              variant: "outlined",
              disabled: !dataChanged.some((x) => x),
              onClick() {
                MessageManager.show("button clicked");
                handleChange({ key: "string", value: "btn" });
              },
              // startIcon: <AddIcon />,
              children: "Cancel",
            },
          ]}
        />
        {Object.keys(textFieldsProps).map((textFieldProps) => (
          {
            witch(textFieldProps.type)
            {
              case 'string':
                return <TextField
                  {...textFieldsProps[textFieldProps]}
                  onChange={(e) => {
                    handleChange({ key: textFieldProps, value: e.target.value });
                  }
                }/>
          }
          }
          
        ))}
      </Stack>
    </Paper>
  );
}
