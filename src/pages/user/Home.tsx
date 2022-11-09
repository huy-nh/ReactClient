import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import { Container } from "@mui/system";
import PageHeader from "features/layouts/PageHerder";

function Home() {
  return (
    <Container>
      <PageHeader title="Home" />
      <Paper elevation={3} sx={{ p: 3 }}>
        Content
      </Paper>
    </Container>
  );
}

export default Home;

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
