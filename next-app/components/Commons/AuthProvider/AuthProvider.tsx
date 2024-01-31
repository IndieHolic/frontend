"use client";

import { useDisclosure } from "@mantine/hooks";
import { createContext, useCallback, useEffect, useState } from "react";
import { LogInModal } from "../LogInModal/LogInModal";
import { User } from "@/types/api/user";
import { ClientAxios } from "@/utils/api/ClientAxios";
import Cookies from "js-cookie";
import {
  JWT_COOKIE_NAME,
  JWT_MAX_AGE,
} from "@/components/Commons/AuthProvider/AuthProvider.constant";

interface AuthContextType {
  user: User | null;
  openLogInModal: () => void;
  token: string | null;
  login: (userId: string, password: string, keepLoggedIn: boolean) => void;
  logout: () => void;
  isLoggedIn: boolean;
  isLoading: boolean;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  openLogInModal: () => {},
  token: null,
  login: () => {},
  logout: () => {},
  isLoggedIn: false,
  isLoading: false,
});

interface AuthProviderProps {
  children: React.ReactNode;
}
export function AuthProvider({ children }: AuthProviderProps) {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isLoadingCookie, setIsLoadingCookie] = useState(true);
  const [isLoadingUser, setIsLoadingUser] = useState(true);
  const [isLoadingLogin, setIsLoadingLogin] = useState(false);
  const [
    isLogiInModalopened,
    { open: openLogInModal, close: closeLogInModal },
  ] = useDisclosure(false);

  const fetchAndSetUser = useCallback(async (token: string) => {
    setIsLoadingUser(true);

    try {
      const { data } = await ClientAxios.get<User>("/user/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoadingUser(false);
    }
  }, []);

  useEffect(() => {
    setIsLoadingCookie(true);

    const storedValue = Cookies.get(JWT_COOKIE_NAME);
    if (storedValue) {
      setToken(storedValue);
      ClientAxios.defaults.headers.Authorization = `Bearer ${token}`;
      fetchAndSetUser(storedValue);
    } else {
      setToken(null);
      setIsLoadingUser(false);
    }

    setIsLoadingCookie(false);
  }, [fetchAndSetUser, token]);

  const login = async (
    userId: string,
    password: string,
    keepLoggedIn: boolean
  ) => {
    setIsLoadingLogin(true);

    const res = await ClientAxios.post<{
      accessToken: string;
    }>("/auth/login", {
      userId,
      password,
    });
    const token = res.data.accessToken;
    setToken(token);

    setIsLoadingLogin(false);
    setIsLoadingCookie(true);

    ClientAxios.defaults.headers.Authorization = `Bearer ${token}`;
    Cookies.set(JWT_COOKIE_NAME, token, {
      expires: keepLoggedIn ? JWT_MAX_AGE : undefined,
    });
    fetchAndSetUser(token);

    setIsLoadingCookie(false);
  };

  const logout = () => {
    setIsLoadingCookie(true);

    setToken(null);
    setUser(null);
    Cookies.remove(JWT_COOKIE_NAME);

    setIsLoadingCookie(false);
    window.location.replace("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        openLogInModal,
        token,
        login,
        logout,
        isLoggedIn: !!token,
        isLoading: isLoadingCookie || isLoadingUser || isLoadingLogin,
      }}
    >
      <LogInModal opened={isLogiInModalopened} close={closeLogInModal} />
      {children}
    </AuthContext.Provider>
  );
}
