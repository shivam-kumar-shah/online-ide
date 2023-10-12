import {
  BaseQueryFn,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

import { RootState } from "../store";
import { authActions } from "../reducers/Auth/authReducer";
import { QueryReturnValue } from "@reduxjs/toolkit/dist/query/baseQueryTypes";

const BASE_URL = process.env.REACT_APP_BASE_URL!;

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  credentials: "include",
  prepareHeaders(headers, api) {
    const state = api.getState() as RootState;
    const token = state.authReducer.accessToken;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.originalStatus === 401) {
    console.log("sending refresh token");

    const refreshResult = (await baseQuery(
      "/users/refresh",
      api,
      extraOptions,
    )) as QueryReturnValue<
      { accessToken: string },
      FetchBaseQueryError,
      FetchBaseQueryMeta
    >;
    if (refreshResult?.data) {
      const state = api.getState() as RootState;
      const user = state.authReducer.user;
      api.dispatch(
        authActions.setAccessToken(refreshResult?.data?.accessToken),
      );
      result = await baseQuery(args, api, extraOptions);
    } else {
      //Write a logout method;
      console.log("Invalid user");
      // api.dispatch()
    }
  }
  return result;
};

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["User"],
  endpoints: (builder) => ({}),
});

export default apiSlice;
