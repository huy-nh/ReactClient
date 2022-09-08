import { PageHeader } from "pages/shared/components/PageHeader";
import { Paper } from "@mui/material";

export default function PageNotFound() {
  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <PageHeader title="Page Not Found" />
    </Paper>
  );
}
