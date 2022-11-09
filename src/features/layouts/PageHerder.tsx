import { Box, Button, IconButton, Stack, Typography } from "@mui/material";

import { ArrowBack } from "@mui/icons-material";
import { Link } from "react-router-dom";

interface IProps {
  title?: string;
  buttons?: any;
  size?: any;
  backUrl?: string;
  [x: string]: any;
}
const backIconStyle = (theme: any) => ({
  padding: theme.spacing(0.5),
  marginRight: theme.spacing(1),
  marginTop: theme.spacing(0.5),
});

const PageHeader = ({
  title,
  buttons,
  size,
  backUrl,
  ...otherProps
}: IProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "baseline",
        justifyContent: "space-between",
        pb: 3,
        pt: 3,
      }}
      {...otherProps}
    >
      {backUrl && (
        <Link to={backUrl}>
          <ArrowBack />
        </Link>
      )}
      <Box sx={{ marginRight: "auto" }}>
        <Typography
          variant={size ?? "h4"}
          style={{ marginBottom: "0px" }}
          gutterBottom
        >
          {title}
        </Typography>
      </Box>
      <Stack direction="row" spacing={1}>
        {buttons?.map((button: any) => (
          <Button
            color="primary"
            variant="contained"
            children={button.children}
            onClick={button.onClick}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default PageHeader;
