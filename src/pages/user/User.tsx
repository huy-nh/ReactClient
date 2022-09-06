import { Paper } from "@mui/material";

import { PageHeader } from "pages/shared/PageHeader";

export default function User() {
  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <PageHeader title="User" />
    </Paper>
  );
}
