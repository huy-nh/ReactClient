import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import { Link, Outlet } from "react-router-dom";

import { AuthContext } from "providers/AuthContext";
import { Box } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import DialogManager from "pages/container/DialogManager";
import { useState } from "react";
import SaveIcon from "@mui/icons-material/Save";

export default function Home() {
  return (
    <Box textAlign="right">
      <AuthContext.Consumer>
        {(authContext) =>
          authContext.id ? (
            <>
              <Box component="span">Welcome {authContext.name + " "}</Box>
              <Button
                variant="contained"
                disabled={authContext.id === ""}
                onClick={async () => {
                  var result = await DialogManager.show(ConfirmDialog, {
                    title: "Title",
                    content: "Content",
                  });
                  if (result) {
                    authContext.onSignOut();
                  }
                }}
              >
                Logout
              </Button>
              <Outlet />
            </>
          ) : (
            <></>
          )
        }
      </AuthContext.Consumer>
      <Typography align="left" gutterBottom>
        <Link to="/">Home</Link> | <Link to="/customers">Customers</Link> |{" "}
        <Link to="/settings">Setting</Link> | <Link to="/admin">Admin</Link>
      </Typography>
      <Box textAlign="center">
        <Button
          variant="contained"
          onClick={() => {
            DialogManager.show(ExampleDialog, {});
          }}
        >
          ExampleDialog
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            DialogManager.show(ConfirmDialog, {
              title: "Title",
              content: "Content",
            });
          }}
        >
          ConfirmDialog
        </Button>
      </Box>
    </Box>
  );
}

export function ExampleDialog({ onDialogClose }: any) {
  return (
    <Dialog
      onClose={onDialogClose}
      aria-labelledby="customized-dialog-title"
      open
    >
      <DialogTitle>
        Modal title
        <IconButton
          aria-label="close"
          onClick={onDialogClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Typography gutterBottom>
          Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
          magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
          ullamcorper nulla non metus auctor fringilla.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={onDialogClose}>
          Save changes
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export function ConfirmDialog({ title, content, onDialogClose }: any) {
  return (
    <Dialog
      onClose={onDialogClose}
      aria-labelledby="customized-dialog-title"
      open
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle>
        {title}
        <IconButton
          aria-label="close"
          onClick={onDialogClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Typography>{content}</Typography>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={onDialogClose}>
          Ok&ensp;
          <SaveIcon />
        </Button>
        <Button variant="outlined" onClick={onDialogClose}>
          Cancel&ensp;
        </Button>
      </DialogActions>
    </Dialog>
  );
}
