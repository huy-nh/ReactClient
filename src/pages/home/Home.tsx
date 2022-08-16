import { Button, Typography } from "@mui/material";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { AuthContext } from "app/providers/AuthContext";
import { Box } from "@mui/system";
import Customer from "pages/customer/Customer";
import StringPage from "pages/string-page/StringPage";

export default function Home() {
  return (
    <Box textAlign="right">
      <AuthContext.Consumer>
        {(authContext) => (
          <>
            <Box component="span">Welcome {authContext.name + " " }</Box>
            <Button
              variant="contained"
              disabled={authContext.id === ""}
              onClick={authContext.onLogOut}
            >
              Logout
            </Button>
          </>
        )}
      </AuthContext.Consumer>

      <Typography align="left" gutterBottom>
        <Link to="/">Home</Link> | <Link to="customers">Customers</Link> |{" "}
        <Link to="settings">Setting</Link> | <Link to="admin">Admin</Link>
      </Typography>

      <Routes>
        <Route index element={<StringPage title="Index" />}></Route>
        <Route path="customers" element={<Customer />}></Route>
        <Route
          path="settings"
          element={<StringPage title="Settings" />}
        ></Route>
        <Route path="admin" element={<StringPage title="Admin" />}></Route>
      </Routes>
    </Box>
  );
}
