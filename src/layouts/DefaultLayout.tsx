import { FC } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';
import { ErrorFallback } from '../components';

export const DefaultLayout: FC = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <QueryParamProvider adapter={ReactRouter6Adapter}>
        <ToastContainer autoClose={2000} />
        <Outlet />
      </QueryParamProvider>
    </ErrorBoundary>
  );
};
