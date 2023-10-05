import { useSelector } from "react-redux";
import { axiosPrivate } from "../api/axios";
import useRefreshToken from "./useRefreshToken";
import { authSelector } from "../redux/reducers/authReducer";
import { useEffect } from "react";
import { AxiosError, InternalAxiosRequestConfig } from "axios";
export const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  const { accessToken } = useSelector(authSelector);

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${accessToken!}`;
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
    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [accessToken, refresh]);

  return axiosPrivate;
};

export default useAxiosPrivate;
