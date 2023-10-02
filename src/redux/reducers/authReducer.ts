import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface User {
  username: string;
  email: string;
}

export interface AuthState {
  user: User | null;
  accessToken: string | null;
}
export interface AuthCredentials {
  username?: string;
  email: string;
  password: string;
}

export const signUpAsyncThunk = createAsyncThunk(
  "auth/signup",
  async (cred: AuthCredentials, thunkApi) => {
    try {
    } catch (error) {}
  },
);

const initialState: AuthState = {
  user: null,
  accessToken: null,
};

export const authSlice = createSlice({
  initialState: initialState,
  name: "auth",
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    setAuthState: (state, action: PayloadAction<AuthState>) => {
      state = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
