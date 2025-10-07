import React, { createContext, useContext, useEffect, useState } from 'react';

type User = {
  id: string,
  name: string
} | null;

type AuthContext = {
  user: User;
  loading: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthCtx = createContext<AuthContext | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const raw = localStorage.getItem('user');
    if (raw) setUser(JSON.parse(raw));
    setLoading(false);
  }, [])
  
  const login = async (username: string, password: string) => {
    /* ЗДЕСЬ БУДЕТ КОД А ПОКА ЧТО ПУСТЬ БУДЕТ ТАК */
    const demoUser = { id: '1', name: username || 'User' };
    localStorage.setItem('demo_user', JSON.stringify(demoUser));
    return
  };
  
  const logout = () => {
    localStorage.removeItem('demo_user');
    setUser(null);
  };
  
  return (
    <AuthCtx.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthCtx.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthCtx);
  if (!ctx) throw new Error('fuck');
  return ctx;
}