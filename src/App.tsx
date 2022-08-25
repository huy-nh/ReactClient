import { Navigate, Route, Routes } from "react-router-dom";

import { AuthProvinder } from "providers/AuthContext";
import DialogContainer from "pages/container/DialogContainer";
import Home from "pages/home/Home";
import Login from "pages/shared/Login";
import Logout from "pages/shared/Logout";
import Main from "pages/shared/Main";
import MessagesContainer from "pages/messages/MessagesContainer";

function App() {
  return (
    <>
      <AuthProvinder>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="logout" element={<Logout />} />
          <Route element={<Main />}>
            <Route index element={<Home />} />
            <Route path="dashboard" element={<Home />} />
            <Route path="customers" element={<Home />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
        <DialogContainer />
        <MessagesContainer />
      </AuthProvinder>
    </>
  );
}

export default App;
