import { createContext, useContext, useState } from 'react';
import { pb } from '@/lib/pocketbase';
import { UsersResponse } from '@/types/pocketbase-types';

export interface AuthContext {
  isAuthenticated: boolean;
  token: string | null;
  user: UsersResponse | null;
  setToken: (token: string | null) => void;
  setUser: (user: UsersResponse | null) => void;
}

const AuthContext = createContext<AuthContext | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UsersResponse | null>(
    pb.authStore.model as UsersResponse
  );
  const [token, setToken] = useState<string | null>(pb.authStore.token);

  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        token: token,
        user: user,
        setUser: setUser,
        setToken: setToken,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};

export const useAuthUser = () => {
  const auth = useAuth();

  const setAuthUser = () => {
    const pbToken = pb.authStore.token;
    const user = pb.authStore.model as UsersResponse;

    auth.setToken(pbToken);
    auth.setUser(user);
    // localStorage.setItem('auth_token', pbToken);
  };

  const removeAuthUser = () => {
    auth.setToken(null);
    auth.setUser(null);
    // localStorage.removeItem('auth_token');
  };

  return { setAuthUser, removeAuthUser };
};
