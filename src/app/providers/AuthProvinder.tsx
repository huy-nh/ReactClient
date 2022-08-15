import { AuthContext, defaultContext } from "./AuthContext";

export const AuthProvinder = ({ children }: any) => {
  return (
    <AuthContext.Provider value={defaultContext}>
      {children}
    </AuthContext.Provider>
  );
};
