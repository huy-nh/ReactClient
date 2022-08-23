import { AuthContext, AuthProvinder } from "providers/AuthContext";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";

import AppBar from "pages/shared/MenuBar";
import { Box } from "@mui/material";
import { Container } from "@mui/system";
import DialogContainer from "pages/container/DialogContainer";
import Home from "pages/home/Home";
import Login from "pages/shared/Login";
import Logout from "pages/shared/Logout";
import Main from "pages/shared/Main";
import StringPage from "pages/shared/StringPage";

function App() {
  return (
    <>
      <AuthProvinder>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="logout" element={<Logout />} />
          <Route element={<Main />}>
            <Route index element={<Home />} />
            <Route path="customers" element={<StringPage title="C" />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
        <DialogContainer />
      </AuthProvinder>
    </>
  );
}

export default App;
