import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { AuthState, User } from "./types/auth";
import { authApiSlice } from "./authApiSlice";

const initialState: AuthState = {
  user: null,
  accessToken: null,
  loading: false,
  error: null,
};

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
    // builder.addCase(signUpAsyncThunk.fulfilled, (state, { payload }) => {
    //   state.accessToken = payload.accessToken;
    //   state.loading = false;
    //   state.user = payload.user;
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
