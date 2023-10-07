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
