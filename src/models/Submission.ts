import { LanguageEnum } from "./LanguageEnums";

export interface Submission {
  id: string;
  title: string;
  date: string;
  language: LanguageEnum;
  submissionLink: string;
}
