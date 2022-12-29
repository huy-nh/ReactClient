import { Grid } from "@mui/material";
import React from "react";

const GirdLayout = (props: GridLayoutProps) => {
    const { children, xs, md, spacing, alignItems } = props;

    const gridValue = typeof xs === 'number' ? [xs] :
        typeof xs === 'string' ? [12]
            : xs;

    const gridValueMd = typeof md === 'number' ? [md] :
        typeof md === 'string' ? [12]
            : md;

    return (
        <Grid container alignItems={alignItems} spacing={spacing}>
            {React.Children.map(children, (node: any, index: number) => {

                return (
                    <Grid xs={gridValue?.at(index % gridValue?.length)} md={gridValueMd?.at(index % gridValueMd?.length)} item>
                        {node}
                    </Grid>
                );
            })}
        </Grid>
    );
};

interface GridLayoutProps {
    xs: number | number[];

    md: number | number[];
    spacing?: number;
    alignItems?: any;
    children?: any;
}

export default GirdLayout;