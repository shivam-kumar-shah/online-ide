import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store";
import axios from "../../api/axios";
import { useAxiosPrivate } from "../../hooks/useAxiosPrivate";

import {
  AuthCredentials,
  AuthError,
  AuthResponse,
  AuthState,
  User,
} from "./types/auth";
import { AxiosError } from "axios";

const initialState: AuthState = {
  user: null,
  accessToken: null,
  loading: false,
  error: null,
};

// Sign-up Thunk

export const signUpAsyncThunk = createAsyncThunk<
  AuthResponse,
  AuthCredentials,
  { rejectValue: AuthError }
>("auth/signup", async (cred, thunkApi) => {
  try {
    const response = await axios.post<AuthResponse>("/users/signup", cred);
    const data = response.data;
    return data;
  } catch (error: any) {
    const err = error as AxiosError<AuthError>;
    return thunkApi.rejectWithValue({
      message: err?.response?.data?.message ?? "Error in signUpThunk",
    });
  }
});

// refresh-token Thunk

// export const refreshTokenAsyncThunk = createAsyncThunk<
//   AuthResponse,
//   AuthCredentials,
//   { rejectValue: AuthError }
// >("auth/refresh", async (cred, thunkApi) => {
//   try {
//     const response = await axios.get<AuthResponse>("/users/refresh", {
//       withCredentials: true,
//     });
//     const data = response.data;
//     return data;
//   } catch (error) {
//     const err = error as AxiosError<AuthError>;
//     return thunkApi.rejectWithValue({
//       message: err?.response?.data?.message ?? "Error in refreshThunk",
//     });
//   }
// });

// SignIn thunk
export const loginAsyncThunk = createAsyncThunk<
  AuthResponse,
  AuthCredentials,
  { rejectValue: AuthError }
>("auth/login", async (cred, thunkApi) => {
  console.log(cred);
  // const axiosPrivate = useAxiosPrivate();
  console.log("axiosPrivate");
  try {
    const response = await axios.post<AuthResponse>("/users/create-session", {
      email: cred.email,
      password: cred.password,
    });
    console.log(response);
    const data = response.data;
    return data;
  } catch (error) {
    const err = error as AxiosError<AuthError>;
    console.log(err);
    return thunkApi.rejectWithValue({
      message: err.stack ?? "",
    });
  }
});

// Auth Slice
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
      const { payload } = action;
      state.accessToken = payload.accessToken;
      state.loading = false;
      state.error = payload.error;
      state.user = payload.user;
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
      state.error = payload!.message;
    });
    builder.addCase(loginAsyncThunk.rejected, (state, { payload }) => {
      console.log(payload);
      state.loading = false;
      state.error = payload?.message ?? "Error in login";
    });
    builder.addCase(loginAsyncThunk.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.accessToken = payload.accessToken;
      state.user = payload.user;
    });
    // builder.addCase(refreshTokenAsyncThunk.rejected, (state, { payload }) => {
    //   state.error = payload!.message;
    // });
    // builder.addCase(refreshTokenAsyncThunk.fulfilled, (state, { payload }) => {
    //   state.accessToken = payload.accessToken;
    // });
  },
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
export const authSelector = (state: RootState) => state.authReducer;
