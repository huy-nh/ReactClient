import React from "react";

export interface IAuthContext {
  id: string;
  name: string;
  code: string;
  roles: string[];
}

export const defaultContext: IAuthContext = {
  id: "",
  name: "",
  code: "",
  roles: [],
};

export const AuthContext = React.createContext<IAuthContext>(defaultContext);
