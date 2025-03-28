export type PayloadWithCallbacks<
  TData,
  TOnSuccess extends (...args: any[]) => any = () => void,
> = {
  onFailure?: (errors: string | string[]) => void;
  onSuccess?: TOnSuccess;
  data: TData;
};
