import { Menu, Routing } from "pages/shared/components/route/Menu";
import { Route, Routes } from "react-router-dom";

import { AuthProvinder } from "features/providers/AuthContext";
import { Container } from "@mui/system";
import DialogContainer from "features/container/DialogContainer";
import Login from "pages/shared/Login";
import Logout from "pages/shared/Logout";
import MainLayout from "pages/shared/components/layout/MainLayout";
import MessagesContainer from "features/messages/MessagesContainer";
import PageNotFound from "pages/shared/PageNotFound";

function App() {
  return (
    <AuthProvinder>
      <MainLayout
        menu={
          <Routes>
            <Route path="/admin/*" element={<Menu type="admin" />} />
            <Route path="/*" element={<Menu type="user" />} />
          </Routes>
        }
        body={
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/" children={Routing({ type: "user" })} />
            <Route path="/admin" children={Routing({ type: "admin" })} />
            <Route path="/page-not-found" element={<PageNotFound />} />
          </Routes>
        }
      />
      <DialogContainer />
      <MessagesContainer />
    </AuthProvinder>
  );
}

export default App;
