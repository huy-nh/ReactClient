import { Menu, Routing } from "pages/shared/components/Menu";
import { Route, Routes } from "react-router-dom";

import { AuthProvinder } from "features/providers/AuthContext";
import DialogContainer from "features/container/DialogContainer";
import Login from "pages/shared/Login";
import Logout from "pages/shared/Logout";
import Main from "pages/shared/components/Main";
import MessagesContainer from "features/messages/MessagesContainer";
import PageNotFound from "pages/shared/PageNotFound";

function App() {
  return (
    <AuthProvinder>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="logout" element={<Logout />} />
        <Route
          path=""
          element={<Main element={<Menu type="user" />} />}
          children={Routing({ type: "user" })}
        />
        <Route
          path="admin"
          element={<Main element={<Menu type="admin" />} />}
          children={Routing({ type: "admin" })}
        />
        <Route path="page-not-found" element={<PageNotFound />} />
      </Routes>
      <DialogContainer />
      <MessagesContainer />
    </AuthProvinder>
  );
}

export default App;
