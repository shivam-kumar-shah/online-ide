import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "../../../api/axios";

import {
  AuthCredentials,
  AuthError,
  AuthResponse,
  AuthState,
  User,
} from "./types/auth";
import { AxiosError } from "axios";
import { authApiSlice } from "./authApiSlice";

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
    // builder.addCase(signUpAsyncThunk.pending, (state) => {
    //   state.loading = true;
    // });
    // builder.addCase(signUpAsyncThunk.fulfilled, (state, { payload }) => {
    //   state.accessToken = payload.accessToken;
    //   state.loading = false;
    //   state.user = payload.user;
    // });
    // builder.addCase(signUpAsyncThunk.rejected, (state, { payload }) => {
    //   state.loading = false;
    //   state.error = payload!.message;
    // });
    builder.addMatcher(
      authApiSlice.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.accessToken = payload.accessToken;
        state.user = payload.user;
      },
    );
    builder.addMatcher(
      authApiSlice.endpoints.signUp.matchFulfilled,
      (state, { payload }) => {
        console.log(payload);
        state.accessToken = payload.accessToken;
        state.user = payload.user;
      },
    );
  },
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
