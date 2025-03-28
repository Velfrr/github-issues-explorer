import { ApiError } from '../types';

export const checkIsApiError = (err: unknown): err is ApiError => {
  return Boolean((err as ApiError)?.status);
};
