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
      <Main
        menu={
          <Routes>
            <Route
              key="admin/*"
              path="admin/*"
              element={<Menu type="admin" />}
            />
            <Route key="/*" path="/*" element={<Menu type="user" />} />
          </Routes>
        }
        body={
          <Routes>
            <Route key="login" path="login" element={<Login />} />
            <Route key="logout" path="logout" element={<Logout />} />
            <Route key="/" path="/" children={Routing({ type: "user" })} />
            <Route
              key="admin"
              path="admin"
              children={Routing({ type: "admin" })}
            />
            <Route
              key="page-not-found"
              path="page-not-found"
              element={<PageNotFound />}
            />
            <Route key="a" path="a">
              <Route
                path="b"
                element={'<Main element={<Menu type="user" />} />'}
              ></Route>
              <Route
                path="c"
                element={'<Main element={<Menu type="user" />} />'}
              ></Route>
              <Route
                path="d"
                element={'<Main element={<Menu type="user" />} />'}
              ></Route>
            </Route>
          </Routes>
        }
      />

      <DialogContainer />
      <MessagesContainer />
    </AuthProvinder>
  );
}

export default App;
