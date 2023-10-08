import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import axiosInstance from "./axios";

import { StoreType } from "../redux/reducers/types/storeType";
import { AuthResponse } from "../redux/reducers/types/auth";
import { authActions } from "../redux/reducers/authReducer";
const BASE_URL = process.env.REACT_APP_BASE_URL!;
const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

export const configureAxios = (store: StoreType) => {
  const { accessToken } = store.getState().authReducer;

  const requestIntercept = axiosPrivate.interceptors.request.use(
    async (config) => {
      const newAccessToken = await refresh();
      store.dispatch(authActions.setAccessToken(newAccessToken));
      if (!config.headers["Authorization"]) {
        config.headers["Authorization"] = `Bearer ${newAccessToken!}`;
      }
      return config;
    },
    (error) => Promise.reject(error),
  );

  const responseIntercept = axiosPrivate.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
      const prevRequest = error?.config as InternalAxiosRequestConfig;
      if (error?.response?.status === 403 && !prevRequest.sent) {
        prevRequest.sent = true;
        const newAccessToken = await refresh();
        prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
        return axiosPrivate(prevRequest);
      }
    },
  );
};

const refresh = async () => {
  try {
    const response = await axiosInstance.get<AuthResponse>("/users/refresh", {
      withCredentials: true,
    });
    console.log("2.4", response);
    const data = response.data;
    return data.accessToken!;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default axiosPrivate;
