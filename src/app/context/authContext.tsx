import { createContext, useContext, useState } from "react";

export interface IAuthData {
  id: string;
  name: string;
  code: string;
  roles: string[];
}

export const AuthContext = createContext<IAuthData | null>(null);

function AuthProvider({ children }): JSX.Element {

  const [auth, setAuth] = useState<IAuthData>({
    id: '',
    code: '',
    name: '',
    roles: [],
  });

  return <>
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  </>
}
