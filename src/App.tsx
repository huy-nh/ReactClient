import { AuthContext, AuthProvinder } from "app/providers/AuthContext";

import { Container } from "@mui/system";
import Home from "pages/home/Home";
import Login from "pages/login/Login";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Container fixed>
        <AuthProvinder>
          <AuthContext.Consumer>
            {(auth) => (auth?.id === "" ? <Login /> : <Home />)}
          </AuthContext.Consumer>
        </AuthProvinder>
      </Container>
    </BrowserRouter>
  );
}

export default App;
