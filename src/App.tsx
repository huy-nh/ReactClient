import { AuthContext, AuthProvinder } from "app/providers/AuthContext";

import { Container } from "@mui/system";
import Home from "pages/home/Home";
import Login from "pages/login/Login";

function App() {
  return (
    <Container fixed>
      <AuthProvinder>
        <AuthContext.Consumer>
          {(auth) => (auth?.id === "" ? <Login /> : <Home />)}
        </AuthContext.Consumer>
      </AuthProvinder>
    </Container>
  );
}

export default App;
