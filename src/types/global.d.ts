export {};
declare global {}
declare module "axios" {
  export interface InternalAxiosRequestConfig {
    sent: boolean;
  }
}

declare module "@reduxjs/toolkit/query/react" {
  export interface FetchBaseQueryError {
    originalStatus: number;
  }
}
