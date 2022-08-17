import { AuthContext, AuthProvinder } from "providers/AuthContext";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";

import { Container } from "@mui/system";
import Home from "pages/home/Home";
import Login from "pages/login/Login";
import StringPage from "pages/string-page/StringPage";

function App() {
  return (
    <Container fixed>
      <AuthProvinder>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route
            element={
              <AuthContext.Consumer>
                {(authContext) =>
                  authContext.id ? <Outlet /> : <Navigate to="/login" replace />
                }
              </AuthContext.Consumer>
            }
          >
            <Route index element={<StringPage title="Index" />} />
            <Route
              path="customers"
              element={<StringPage title="Customers" />}
            />
            <Route path="home" element={<Home />}></Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </AuthProvinder>
    </Container>
  );
}

export default App;
