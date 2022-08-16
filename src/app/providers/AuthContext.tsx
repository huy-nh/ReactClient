import React, { useState } from "react";

interface IAuthContext {
  id: string;
  name: string;
  code: string;
  roles: string[];
  onLogin: () => void;
  onLogOut: () => void;
}

const defaultContext: IAuthContext = {
  id: "",
  name: "",
  code: "",
  roles: [],
  onLogin: () => {},
  onLogOut: () => {},
};

const AuthContext = React.createContext<IAuthContext>(defaultContext);

const AuthProvinder = ({ children }: any) => {
  const [id, setId] = useState<string>("");
  const [name, setName] = useState<string>("");

  const authContext: IAuthContext = {
    id,
    name: name,
    code: "",
    roles: [],
    onLogin: () => {
      setId("123");
      setName("H.Huy");
    },
    onLogOut: () => {
      setId("");
    },
  };

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};

export { AuthContext, AuthProvinder };
