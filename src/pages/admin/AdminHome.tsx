import { PageHeader } from "pages/shared/PageHeader";
import { Paper } from "@mui/material";

export default function AdminHome() {
  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <PageHeader title="Admin Home" />
    </Paper>
  );
}
