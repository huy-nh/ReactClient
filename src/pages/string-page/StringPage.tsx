import { Box } from "@mui/system";
import { Typography } from "@mui/material";

export default function StringPage({title}: any) {
  return (
    <Box>
      <Typography variant="h3" align="center" gutterBottom>
        {title}
      </Typography>
    </Box>
  );
}
