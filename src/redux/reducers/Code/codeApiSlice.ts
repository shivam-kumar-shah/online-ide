import apiSlice from "../../api";
import { CodeResponse, CodeState, CodeSuccess } from "./types/code";

export const codeApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    run: builder.mutation<CodeSuccess, CodeState>({
      query: (codeState) => ({
        url: "/users/submit",
        method: "POST",
        body: {
          src: codeState.source,
          lang: codeState.lang.valueOf(),
          stdin:codeState.input,
        },
      }),
    }),
    runResult: builder.query<CodeResponse, CodeState>({
      query: (codeState) => {
        const id = codeState.submissionId;
        return {
          url: `/users/results/${id ?? ""}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useRunMutation, useRunResultQuery } = codeApiSlice;
