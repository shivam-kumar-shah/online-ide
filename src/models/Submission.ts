import { LanguageEnum } from "./LanguageEnum";

export interface Submission {
  id: string;
  title: string;
  date: string;
  language: LanguageEnum;
  submissionLink: string;
}
