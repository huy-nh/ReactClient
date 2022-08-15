import { AuthProvinder } from "./app/providers/AuthProvinder";
import { Container } from "@mui/system";
import Admin from "app/component/admin";
import Customer from "app/component/customer";
import { AuthContext } from "app/providers/AuthContext";
import { Button } from "@mui/material";

function App() {
  return (
    <Container fixed>
      <Button variant="contained">Button</Button>
      <AuthProvinder>
        <AuthContext.Consumer>
          {(auth) => (auth.id ? <Admin /> : <Customer />)}
        </AuthContext.Consumer>
      </AuthProvinder>
    </Container>
  );
}

export default App;
