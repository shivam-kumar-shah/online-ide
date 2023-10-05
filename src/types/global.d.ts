export {};
declare global {}
declare module "axios" {
  export interface InternalAxiosRequestConfig {
    sent: boolean;
  }
}
