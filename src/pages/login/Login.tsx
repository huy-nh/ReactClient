import { Button, Typography } from "@mui/material";

import { AuthContext } from "providers/AuthContext";
import { Box } from "@mui/system";

export default function Login() {
  return (
    <Box>
      <Typography variant="h3" align="center" gutterBottom>
        Login UI
      </Typography>
      <Typography variant="h3" align="center" gutterBottom>
        <AuthContext.Consumer>
          {(authContext) => (
            <Button variant="contained" onClick={authContext.onSignIn}>
              Login
            </Button>
          )}
        </AuthContext.Consumer>
      </Typography>
    </Box>
  );
}
