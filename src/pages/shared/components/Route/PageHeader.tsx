import { Box, Button, Grid, Stack, Typography } from "@mui/material";

export function PageHeader(props) {
  const { title, subTitle, buttons } = props;
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h4" mb={0} gutterBottom>
              {title}
            </Typography>
            {subTitle && (
              <Typography variant="h6" gutterBottom>
                {subTitle}
              </Typography>
            )}
          </Box>
          <Box>
            <Stack
              direction="row"
              justifyContent="flex-end"
              alignItems="flex-start"
              spacing={0.5}
            >
              {buttons &&
                buttons.map((buttonProps) => <Button {...buttonProps} />)}
            </Stack>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
