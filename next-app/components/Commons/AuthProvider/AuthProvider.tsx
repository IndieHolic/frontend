"use client";

import { useDisclosure } from "@mantine/hooks";
import { createContext } from "react";
import { LogInModal } from "../LogInModal/LogInModal";

interface AuthContextType {
  openLogInModal: () => void;
}
export const AuthContext = createContext<AuthContextType>({
  openLogInModal: () => {},
});

interface AuthProviderProps {
  children: React.ReactNode;
}
export function AuthProvider({ children }: AuthProviderProps) {
  // 로그인 모달 관련
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <AuthContext.Provider value={{ openLogInModal: open }}>
      <LogInModal opened={opened} close={close} />
      {children}
    </AuthContext.Provider>
  );
}
