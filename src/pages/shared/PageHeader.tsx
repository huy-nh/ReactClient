import { Button, Grid, Stack, Typography } from "@mui/material";

export function PageHeader(props) {
  const { title, subTitle, buttons } = props;
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Typography variant="h4" mb={0} gutterBottom>
          {title}
        </Typography>
        {subTitle && (
          <Typography variant="caption" gutterBottom>
            {subTitle}
          </Typography>
        )}
      </Grid>
      <Grid item xs={6}>
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="flex-start"
          spacing={0.5}
        >
          {buttons && buttons.map((buttonProps) => <Button {...buttonProps} />)}
        </Stack>
      </Grid>
    </Grid>
  );
}
