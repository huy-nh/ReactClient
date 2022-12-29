import { Box, Container, Stack } from "@mui/system";
import { Grid, Skeleton } from "@mui/material";

import GirdLayout from "pages/shared/components/layout/GridLayout";
import PageHeader from "features/layouts/PageHerder";
import React from "react";

const PageHome = () => {
  const element = <PageHeader title="Dashboard" />;

  const Item = ({ color, height }: any) => (
    <Box width={1} height={height || 40} bgcolor={color || "gainsboro"} />
  );

  return (
    <Container>
      <PageHeader title="Dashboard" />
      <GirdLayout xs={12} md={6} spacing={1}>
        <Item color="crimson" />
        <Item color="seagreen" />
        <Item color="orange" />
        <Item color="navy" />
        {/* <Item color="crimson" />
        <Item color="seagreen" />
        <Item color="orange" />
        <Item color="navy" />
        <Item color="crimson" />
        <Item color="seagreen" />
        <Item color="orange" />
        <Item color="navy" />
        <Item color="crimson" />
        <Item color="seagreen" />
        <Item color="orange" />
        <Item color="navy" /> */}
      </GirdLayout>
    </Container>
  );
}

export default PageHome;
