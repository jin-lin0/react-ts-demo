import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";

const axiosInstance: AxiosInstance = axios.create({
  withCredentials: false,
  timeout: 100000,
});

axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  return config;
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    console.log("error", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
