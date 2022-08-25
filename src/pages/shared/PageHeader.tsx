import { Box, Typography } from "@mui/material";

export const PageHeader = ({ title, subTitle }) => (
  <Box flex="1">
    <Typography variant="h4" mb={0} gutterBottom>
      {title}
    </Typography>
    {subTitle && (
      <Typography variant="caption" gutterBottom>
        {subTitle}
      </Typography>
    )}
  </Box>
);
