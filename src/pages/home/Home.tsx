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
                onClick={authContext.onSignOut}
              >
                Logout
              </Button>
              <Outlet />
            </>
          ) : (
            <>{/* <Navigate to="/" replace /> */}</>
          )
        }
      </AuthContext.Consumer>
      <CustomizedDialogs />
      <Typography align="left" gutterBottom>
        <Link to="/">Home</Link> | <Link to="/customers">Customers</Link> |{" "}
        <Link to="/settings">Setting</Link> | <Link to="/admin">Admin</Link>
      </Typography>
      <Button
        variant="outlined"
        onClick={() => {
          DialogManager.show(Contentx, {});
        }}
      >
        Open dialog
      </Button>
    </Box>
  );
}

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

export function CustomizedDialogs() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Modal title
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </Typography>
          {/* <CustomizedDialogs /> */}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export function Contentx({ onDialogClose }: any) {
  return (
    <>
      <Dialog
        onClose={onDialogClose}
        aria-labelledby="customized-dialog-title"
        open
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={onDialogClose}
        >
          Modal title
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={onDialogClose}>
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
