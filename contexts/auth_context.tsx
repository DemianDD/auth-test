"use client";
import React, { createContext, ReactNode } from "react";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextProps {
  selectedRole: string;
  setSelectedRole: React.Dispatch<React.SetStateAction<string>>;
}

export const AuthContext = createContext<AuthContextProps>({
  selectedRole: "",
  setSelectedRole: () => {},
});

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [selectedRole, setSelectedRole] = React.useState(
    localStorage.getItem("role") || ""
  );

  return (
    <AuthContext.Provider
      value={{
        selectedRole,
        setSelectedRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
