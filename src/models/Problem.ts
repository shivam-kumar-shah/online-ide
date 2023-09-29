import { Status } from "./StatusEnum";

export interface Problem {
  id: string;
  title: string;
  status: Status;
  solutionLink?: string;
}
