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
import { ConfirmDialog } from "features/container/ConfirmDialog";
import DialogManager from "features/container/DialogManager";
import MessageManager from "features/messages/MessageManager";
import { PageHeader } from "pages/shared/PageHeader";

export default function User() {
  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <PageHeader title="User" />
    </Paper>
  );
}
