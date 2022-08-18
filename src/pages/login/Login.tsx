import { Button, FormControl, TextField, Typography } from "@mui/material";

import { AuthContext } from "providers/AuthContext";
import { Box } from "@mui/system";
import { useState } from "react";

export default function Login() {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <Box>
      <Typography variant="h3" align="center" gutterBottom>
        Login UI
      </Typography>
      <Box p="3">
        <FormControl fullWidth>
          <TextField
            label="Account Id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </FormControl>

        <FormControl fullWidth>
          <TextField
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
      </Box>

      <Typography variant="h3" align="center" gutterBottom>
        <AuthContext.Consumer>
          {(authContext) => (
            <Button
              variant="contained"
              onClick={() => authContext.onSignIn(id, password)}
            >
              Login
            </Button>
          )}
        </AuthContext.Consumer>
      </Typography>
    </Box>
  );
}
