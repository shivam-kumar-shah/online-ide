import { Dispatch } from "react";
import { RootState } from "../../store";
import { AuthError } from "./auth";
import { AnyAction } from "@reduxjs/toolkit";

export interface CodeState {
  lang: LangEnum;
  source: string;
  input?: string;
  output?: string;
  error?: string;
  loading: boolean;
  message: string | null;
  submissionId?: string;
}
export enum LangEnum {
  cpp = "cpp",
  java = "java",
  python = "python",
}

export type CodeSuccess = {
  msg: string;
  submissionId: string;
};

export type CodeResponse =
  | {
      src: string;
      lang: string;
      output: string;
      stderr: string;
      submission_id: string;
    }
  | { status: string };

export type CodeThunkConfig = {
  rejectValue: AuthError;
  state: RootState;
  dispatch?: Dispatch<AnyAction> | undefined;
  extra?: unknown;
  serializedErrorType?: unknown;
  pendingMeta?: unknown;
  fulfilledMeta?: unknown;
  rejectedMeta?: unknown;
};
