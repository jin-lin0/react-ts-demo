import { AxiosRequestConfig } from "axios";
import axiosInstance from "./interceptor";

export const requestGet = (url: string, config?: AxiosRequestConfig) => {
  return axiosInstance.get(url, config);
};

export const requestPost = (
  url: string,
  data: object,
  config?: AxiosRequestConfig
) => {
  return axiosInstance.post(url, data, config);
};
