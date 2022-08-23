import { AuthContext } from "providers/AuthContext";

export default function Login() {
  return (
    <AuthContext.Consumer>
      {(authContext) => <>{authContext.onSignOut()}</>}
    </AuthContext.Consumer>
  );
}
