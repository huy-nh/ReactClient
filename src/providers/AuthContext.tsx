import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Login from "pages/login/Login";
import StorageManager from "utils/StorageManager";

interface IAuthContext {
  id: string;
  name: string;
  code: string;
  roles: string[];
  onSignIn: () => void;
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
  console.log("AuthContext:value", StorageManager.get("AuthContext:value"));

  const [id, setId] = useState<string>(
    StorageManager.get("AuthContext:value")?.id
  );
  const [name, setName] = useState<string>(
    StorageManager.get("AuthContext:value")?.name
  );

  const [code, setCode] = useState<string>(
    StorageManager.get("AuthContext:value")?.code
  );
  const [roles, setRoles] = useState<[]>(
    StorageManager.get("AuthContext:value")?.roles
  );

  const navigate = useNavigate();

  const onSignIn = () => {
    setId("123");
    setName("H.Huy");
    StorageManager.update("AuthContext:value", { id: "123", name: "H.Huy" });
    localStorage.setItem(
      "AuthContext:value",
      JSON.stringify({ id: "123", name: "H.Huy" })
    );
    console.log("AuthContext:value", StorageManager.get("AuthContext:value"));
    localStorage.getItem("AuthContext:value");
    navigate("/", { replace: true });
  };

  const onSignOut = () => {
    setId("");
    setName("");
    StorageManager.update("AuthContext:value", null);

    console.log("AuthContext:value", StorageManager.get("AuthContext:value"));
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
