import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

import { Box } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import DialogManager from "pages/container/DialogManager";
import SaveIcon from "@mui/icons-material/Save";

export default function Home() {
  return (
    <Box textAlign="right">
      <Box textAlign="center">
        <Stack
          direction="row"
          spacing={1}
          divider={<Divider orientation="vertical" flexItem />}
        >
          <Button
            variant="contained"
            onClick={() => {
              DialogManager.show(ExampleDialog, {});
            }}
          >
            Example
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
            Confirm
          </Button>
        </Stack>
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
