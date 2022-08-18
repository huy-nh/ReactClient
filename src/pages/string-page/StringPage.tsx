import { AuthContext } from "providers/AuthContext";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

export default function StringPage({ title }: any) {
  return (
    <Box>
      <AuthContext.Consumer>
        {(authContext) => (
          <Typography variant="h6" align="right" gutterBottom>
            {authContext.name}
          </Typography>
        )}
      </AuthContext.Consumer>

      <Typography variant="h3" align="center" gutterBottom>
        {title}
      </Typography>
    </Box>
  );
}
