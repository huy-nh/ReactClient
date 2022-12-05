import { Box, Container, Stack } from "@mui/system";
import { FormControl, FormControlLabel, FormLabel, Grid, Input, Skeleton, TextField } from "@mui/material";

import { G } from "pages/shared/components/layout/G";
import PageHeader from "features/layouts/PageHerder";

const PageForm = () => {
  const Item = ({ color, height }: any) => (
    <Box width={1} height={height || 40} bgcolor={color || "gainsboro"} />
  );

  return (
    <Container>
      <PageHeader title="Form" />
      <G xs={12} md={6} spacing={1}>
        <Item color="crimson" />
        <Item color="seagreen" />
        <Item color="orange" />
        <Item color="navy" />
        <FormControl fullWidth >
          <FormLabel children="User name" /><TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </FormControl>
      </G>
    </Container>
  );
}

export default PageForm;
