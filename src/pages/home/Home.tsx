import {
  BrowserRouter,
  Link,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { Button, Typography } from "@mui/material";

import { AuthContext } from "providers/AuthContext";
import { Box } from "@mui/system";
import Customer from "pages/customer/Customer";
import StringPage from "pages/string-page/StringPage";

export default function Home() {
  return (
    <Box textAlign="right">
      <AuthContext.Consumer>
        {(authContext) =>
          authContext.id ? (
            <>
              <Box component="span">Welcome {authContext.name + " "}</Box>
              <Button
                variant="contained"
                disabled={authContext.id === ""}
                onClick={authContext.onSignOut}
              >
                Logout
              </Button>
              <Outlet />
            </>
          ) : (
            <>{/* <Navigate to="/" replace /> */}</>
          )
        }
      </AuthContext.Consumer>

      <Typography align="left" gutterBottom>
        <Link to="/">Home</Link> | <Link to="/customers">Customers</Link> |{" "}
        <Link to="/settings">Setting</Link> | <Link to="/admin">Admin</Link>
      </Typography>
    </Box>
  );
}
