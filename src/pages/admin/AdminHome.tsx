import PageHeader from "features/layouts/PageHerder";
import { Paper } from "@mui/material";

export default function AdminHome() {
  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <PageHeader title="Admin Home" />
    </Paper>
  );
}
