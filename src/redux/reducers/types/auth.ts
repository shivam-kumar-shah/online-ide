export interface User {
  username: string;
  email: string;
}
export type AuthResponse = {
  message: string;
} & AuthState;

export interface AuthState {
  user: User | null;
  accessToken: string | null;
  loading: boolean;
  error: string | null;
}
export interface AuthCredentials {
  username?: string;
  email: string;
  password: string;
}

export type AuthError = {
  message: string;
};
