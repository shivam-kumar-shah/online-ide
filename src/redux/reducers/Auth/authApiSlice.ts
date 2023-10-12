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
  }),
});

export const { useLoginMutation } = authApiSlice;
