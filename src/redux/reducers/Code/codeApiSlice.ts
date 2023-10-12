import apiSlice from "../../api";
import { CodeState, CodeSuccess } from "./types/code";

export const codeApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    run: builder.mutation<CodeSuccess, CodeState>({
      query: (codeState) => ({
        url: "/users/submit",
        method: "POST",
        body: {
          src: codeState.source,
          lang: codeState.lang.valueOf(),
        },
      }),
    }),
  }),
});

export const { useRunMutation } = codeApiSlice;
