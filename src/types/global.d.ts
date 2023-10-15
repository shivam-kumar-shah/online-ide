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
declare module "*.module.css" {
  const content: Record<string, string>;
  export default content;
}
