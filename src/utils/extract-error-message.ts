const isError = (err: unknown): err is Error => {
  return Boolean((err as Error)?.message);
};

export const extractErrorMessage = (err: unknown): string => {
  if (isError(err)) {
    return err.message;
  }

  return 'Something went wrong';
};
