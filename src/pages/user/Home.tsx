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
import { PageHeader } from "pages/shared/components/Route/PageHeader";

function Home() {
  return (
    <Paper
      elevation={3}
      sx={{ p: 3 }}
      // style={{ display: "flex", height: "100%" }}
    >
      <PageHeader
        title="Home"
        // subTitle="Lập Trình Sư nói: “Khi ngươi biết cách lấy mã lỗi từ đoạn code bắt lỗi, ngươi có thể xuống núi.”"
      />
      {/* <Button
        variant="contained"
        onClick={() => {
          MessageManager.show("123");
        }}
      >
        Message
      </Button>

      <Button
        variant="contained"
        onClick={() => {
          MessageManager.show(
            "Lập Trình Sư nói: “Khi ngươi biết cách lấy mã lỗi từ đoạn code bắt lỗi, ngươi có thể xuống núi.”",
            "success"
          );
        }}
      >
        Message
      </Button>

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
      </Button> */}
    </Paper>
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
