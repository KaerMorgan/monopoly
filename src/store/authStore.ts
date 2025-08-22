import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export interface AuthState {
  token?: string;
  isLogged: boolean;
  setToken: (token?: string) => void;
}

export const useAuth = create<AuthState>()(
  devtools(
    persist(
      set => ({
        token: undefined,
        isLogged: false,
        setToken: (token: string | undefined) => set({ token, isLogged: Boolean(token) }),
      }),
      { name: 'auth-storage', partialize: state => ({ token: state.token }) },
    ),
  ),
);
