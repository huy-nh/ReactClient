import Admin from "./app/component/Admin";
import { AuthProvinder } from "./app/providers/AuthProvinder";
import { Container } from "@mui/system";
import Customer from "./app/component/Customer";

function App() {
  return (
    <Container fixed>
      <AuthProvinder>
        <Admin />
        <Customer />
      </AuthProvinder>
    </Container>
  );
}

export default App;
