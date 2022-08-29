import React, { useState } from "react";

import StorageManager from "features/utils/StorageManager";
import { useNavigate } from "react-router-dom";

interface IAuthContext {
  id: string;
  name: string;
  code: string;
  roles: string[];
  onSignIn: (arg0: string, arg1: string) => void;
  onSignOut: () => void;
}

const defaultContext: IAuthContext = {
  id: "",
  name: "",
  code: "",
  roles: [],
  onSignIn: () => {},
  onSignOut: () => {},
};

const AuthContext = React.createContext<IAuthContext>(defaultContext);

const AuthProvinder = ({ children }: any) => {
  const navigate = useNavigate();

  const [id, setId] = useState<string>(
    StorageManager.get(StorageManager.AuthContextKey)?.id
  );
  const [name, setName] = useState<string>(
    StorageManager.get(StorageManager.AuthContextKey)?.name
  );

  const [code, setCode] = useState<string>(
    StorageManager.get(StorageManager.AuthContextKey)?.code
  );
  const [roles, setRoles] = useState<string[]>(
    StorageManager.get(StorageManager.AuthContextKey)?.roles
  );

  const onSignIn = (id: string, name: string) => {
    setId(id);
    setName(name);
    setCode("A51EBCE7-D1C9-4D22-B144-495D3DEB66B0");
    setRoles(["Apple", "Orange", "Banana"]);

    StorageManager.update(StorageManager.AuthContextKey, {
      id,
      name,
    });

    navigate("/", { replace: true });
  };

  const onSignOut = () => {
    setId("");
    setName("");
    StorageManager.update(StorageManager.AuthContextKey, null);

    navigate("/login", { replace: true });
  };

  const authContext: IAuthContext = {
    id,
    name,
    code,
    roles,
    onSignIn,
    onSignOut,
  };

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};

export { AuthContext, AuthProvinder };
