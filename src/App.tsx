import DefaultMenu, {
  AdminRouteConfig,
  DefaultRouteConfig,
} from "pages/shared/DefaultMenu";
import { Route, Routes } from "react-router-dom";

import { AuthProvinder } from "features/providers/AuthContext";
import DialogContainer from "features/container/DialogContainer";
import Login from "pages/shared/Login";
import Logout from "pages/shared/Logout";
import Main from "pages/shared/Main";
import MessagesContainer from "features/messages/MessagesContainer";

function App() {
  const routeFn = (x) => <Route {...x} />;
  return (
    <AuthProvinder>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="logout" element={<Logout />} />
        <Route
          path=""
          element={
            <Main
              element={<DefaultMenu configuration={DefaultRouteConfig} />}
            />
          }
          children={DefaultRouteConfig.map(routeFn)}
        />
        <Route
          path="admin"
          element={
            <Main element={<DefaultMenu configuration={AdminRouteConfig} />} />
          }
          children={DefaultRouteConfig.map(routeFn)}
        />
      </Routes>
      <DialogContainer />
      <MessagesContainer />
    </AuthProvinder>
  );
}

export default App;
