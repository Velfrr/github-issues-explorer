import axios, { InternalAxiosRequestConfig } from 'axios';

const GITHUB_BASE_URL = 'https://api.github.com';

const accessTokenInterceptor = (config: InternalAxiosRequestConfig) => {
  const token = import.meta.env.VITE_GITHUB_ACCESS_TOKEN;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};

export const api = axios.create({ baseURL: GITHUB_BASE_URL });

api.interceptors.request.use(accessTokenInterceptor);
