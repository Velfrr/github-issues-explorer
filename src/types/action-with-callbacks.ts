import { PayloadAction } from '@reduxjs/toolkit';
import { PayloadWithCallbacks } from './payload-with-callbacks';

export type ActionWithCallbacks<
  TData,
  TOnSuccess extends (...args: any[]) => any = () => void,
> = Omit<PayloadAction, 'payload'> & {
  payload: PayloadWithCallbacks<TData, TOnSuccess>;
};
