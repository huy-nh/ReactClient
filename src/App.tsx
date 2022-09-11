import { Menu, Routing } from "pages/shared/components/route/Menu";
import { Route, Routes } from "react-router-dom";

import { AuthProvinder } from "features/providers/AuthContext";
import DialogContainer from "features/container/DialogContainer";
import Login from "pages/shared/Login";
import Logout from "pages/shared/Logout";
import Main from "pages/shared/components/layout/Main";
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
        <Route path="a" element={<Main element={<Menu type="user" />} />}>
          <Route
            path="b"
            element={<Main element={<Menu type="user" />} />}
          ></Route>
          <Route
            path="c"
            element={<Main element={<Menu type="user" />} />}
          ></Route>
          <Route
            path="d"
            element={<Main element={<Menu type="user" />} />}
          ></Route>
        </Route>
      </Routes>
      <DialogContainer />
      <MessagesContainer />
    </AuthProvinder>
  );
}

export default App;
