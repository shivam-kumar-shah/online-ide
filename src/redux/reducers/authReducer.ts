import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import axios from "../../api/axios";

import {
  AuthCredentials,
  AuthError,
  AuthResponse,
  AuthState,
  User,
} from "./types/auth";
import { AxiosError } from "axios";

export const signUpAsyncThunk = createAsyncThunk<
  AuthResponse,
  AuthCredentials,
  { rejectValue: AuthError }
>("auth/signup", async (cred, thunkApi) => {
  try {
    const response = await axios.post<AuthResponse>("/users/signup");
    const data = response.data;
    return data;
  } catch (error: any) {
    const err = error as AxiosError<AuthError>;

    return thunkApi.rejectWithValue({
      message: err?.response?.data?.message ?? "",
    });
  }
});

const initialState: AuthState = {
  user: null,
  accessToken: null,
  loading: false,
  error: null,
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

  extraReducers: (builder) => {
    builder.addCase(signUpAsyncThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(signUpAsyncThunk.fulfilled, (state, { payload }) => {
      state.accessToken = payload.accessToken;
      state.loading = false;
      state.user = payload.user;
    });
    builder.addCase(signUpAsyncThunk.rejected, (state, { payload }) => {
      state.loading = false;
    });
  },
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
