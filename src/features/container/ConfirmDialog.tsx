import { Dialog, DialogTitle, IconButton, DialogContent, Typography, DialogActions, Button } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import SaveIcon from "@mui/icons-material/Save";
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
          <Button variant="contained" onClick={() => {onDialogClose(true)}}>
            Ok&ensp;
            <SaveIcon />
          </Button>
          <Button variant="outlined" onClick={() => {onDialogClose(false)}}>
            Cancel&ensp;
          </Button>
        </DialogActions>
      </Dialog>
    );
  }