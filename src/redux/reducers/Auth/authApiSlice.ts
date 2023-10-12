import apiSlice from "../../api";
import { AuthCredentials, AuthResponse } from "./types/auth";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, AuthCredentials>({
      query: (credentials) => ({
        url: "/users/create-session",
        method: "POST",
        body: {
          ...credentials,
        },
      }),
    }),

    signUp: builder.mutation<AuthResponse, AuthCredentials>({
      query: (credentials) => ({
        url: "/users/signup",
        method: "POST",
        body: {
          ...credentials,
        },
      }),
    }),
  }),
});

export const { useLoginMutation, useSignUpMutation } = authApiSlice;
