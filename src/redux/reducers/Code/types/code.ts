import { Dispatch } from "react";
import { RootState } from "../../../store";
import { AuthError } from "../../Auth/types/auth";
import { AnyAction } from "@reduxjs/toolkit";

export interface CodeState {
  lang: LangEnum;
  source: string;
  input?: string;
  output?: string;
  error?: string;
  loading: boolean;
  message: string | null;
  submissionId: string | null;
  fetchResult?: boolean;
  isSubmission?: boolean;
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

export type CodeResponse = {
  status: string;
  data?: {
    src: string;
    lang: string;
    output: string;
    stderr: string;
    submission_id: string;
  };
};

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
