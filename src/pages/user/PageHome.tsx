import { Box, Container, Stack } from "@mui/system";
import { Grid, Skeleton } from "@mui/material";

import PageHeader from "features/layouts/PageHerder";

function PageHome() {
  const element = <PageHeader title="Dashboard" />;
  console.log("type of <PageHeader>", typeof element);
  console.log("type of PageHeader", typeof PageHeader);

  const Item = ({ color, height }: any) => (
    <Box width={1} height={height || 40} bgcolor={color || "gainsboro"} />
  );

  const FullRowItem = () => (
    <Grid xs={12}>
      <Item color="crimson" />
    </Grid>
  );

  return (
    <Container>
      <PageHeader title="Dashboard" />

      <GridLayout grids={[4, 8]} spacing={2}>
        <Item color="seagreen" />
        <Item />

        <Grid xs={12} item>
          <Item color="crimson" />
        </Grid>

        <Item color="seagreen" />
        <Item />
        <Item color="seagreen" />
        <Item color="orange" />
        {/* <GridLayout grids={[12]} spacing={2}>
            <Item />
            <Item />
            <Item />
            
          </GridLayout> */}
      </GridLayout>
    </Container>
  );
}

const GridLayout = (props: any) => {
  const defaultParams = { grids: [2, 8], spacing: 2 };
  const mergeParams = { ...defaultParams, ...props };
  const { children, grids, spacing } = mergeParams;

  let counter = 0;
  return (
    <Box width={1}>
      <Grid container alignItems="start" spacing={spacing} border="1px solid black">
        {children?.map((node, index) => {
          console.log(node);

          const name = node?.type?.render?.name;
          if (name === "Grid") {
            return node;
          }

          return (
            <Grid md={grids[counter++ % grids.length]} xs={12} item>
              {node}
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default PageHome;
