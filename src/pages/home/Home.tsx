import { Button, Link, Typography } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import { AuthContext } from "app/providers/AuthContext";
import { Box } from "@mui/system";
import Customer from "pages/customer/Customer";

export default function Home() {
  return (
    <Box>
      <Typography variant="h3" align="right" gutterBottom>
        <AuthContext.Consumer>
          {(authContext) => (
            <Button
              variant="contained"
              disabled={authContext.id === ""}
              onClick={authContext.onLogOut}
            >
              Logout
            </Button>
          )}
        </AuthContext.Consumer>
      </Typography>

      {/* <Typography align="left" gutterBottom>
        <Link href="/customers" underline="none">
          <Button variant="contained">Home</Button>
        </Link>
      </Typography> */}

      {/* <Routes>
        <Route path="/customer" component={Customer} />
      </Routes> */}
    </Box>
  );
}
