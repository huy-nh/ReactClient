import { Box, Container } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";

import AppBreadcrumbs from "./Breadcrumbs";
import { AuthContext } from "providers/AuthContext";
import MenuBar from "./MenuBar";

function Main() {
  return (
    <AuthContext.Consumer>
      {(authContext) =>
        authContext.id ? (
          <>
            <>
              <MenuBar />
            </>
            <>
              <Container fixed>
                <AppBreadcrumbs />
                <Outlet />
              </Container>
            </>
          </>
        ) : (
          <Navigate to="/login" replace />
        )
      }
    </AuthContext.Consumer>
  );
}

export default Main;
